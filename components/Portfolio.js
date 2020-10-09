import React, {useEffect, useState, useContext} from 'react'
import {useProjectImages} from '../hooks'
// import {getProjects} from '../actions'
// import firebase from '../firebase'
import Image from './Image'
import  {ProjectContext} from '../contexts/projects'
// import {getLinks} from '../actions'


const Portfolio = () => {
  useProjectImages()
  const {projects} = useContext(ProjectContext)
/*
  useEffect(()=> {
    if(!projects.length){

    getLinks().then(projects => {
      // console.log(typeof p)
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
    })
    }
    
  }, [projects.length])
 
 */
  return (
    <div id='portfolio'>
    <h4>Projects I have worked on</h4>
      {
        projects && projects.map(({name, images, id}) => (
          <div key={id}>
            <h4 style={{textTransform: 'capitalize', fontWeight: 'bold'}}>{name}</h4>
              <div className="images">
              {
                images && images.map((image, i) => {
                    return <Image image={image} key={i}/>
                  })
              }
              
            </div>
        </div>
        ))
      }
      
    </div>
  )
}

export default Portfolio;