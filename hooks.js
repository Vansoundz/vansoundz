import React, {useEffect, useContext} from 'react'
import feather from 'feather-icons/dist/feather.js'
import firebase from './firebase'
import {getProjects, getLinks} from './actions/'
import {ProjectContext} from './contexts/projects'

export const useFeather = () => {
  useEffect(()=> {
    feather.replace()
  })
}

export const useBackground = () => {
  useEffect(() => {
    const {storage} = firebase
    storage().ref('background.jpeg').getDownloadURL().then(url => {
      document.getElementById('root').style.background = `url(${url})`
      document.getElementById('root').style.backgroundAttachment = 'fixed'
    }, [])
  })
}

export const useProjectImages = () => {
  const {projects, dispatch} = useContext(ProjectContext)

  
  useEffect(()=> {
    if(!projects.length){

    getLinks().then(projects => {
      dispatch({type: 'LOAD_PROJECTS', payload: projects})
      projects.forEach(({id, images}) =>{
        images.forEach(image => {
          image.then(url => {
            dispatch({
              type: 'PROJECT_IMAGE',
              payload: {
                id, url
              }
            })
          })
        })
      })
    }).catch(err => {
        console.log(err)
      })
    }
  }, [projects.length])
}
