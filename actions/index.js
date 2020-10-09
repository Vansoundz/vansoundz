import firebase from '../firebase'

export const sendMessage = async message => {
  const {firestore} = firebase

  return firestore().collection('messages').add(message)
    .then(()=> {
      return true
  }).catch(err => {
    return err
  })
}

export const getProjects = async () => {
  const {firestore} = firebase
  return firestore().collection('projects').get().then(snap => {
    var projects = []
    snap.forEach(doc => {
      const item = doc.data()
      item.id = doc.id
      projects = [...projects, item]
    })
    return projects
  })
}

export const getLinks = async () => {
  const {storage} = firebase
  let projects = await getProjects()
  
  projects = projects.map(({name, images, id}) => {
    const links = []
    images = images.map(async img => {
      return storage().ref(`${name}/${img}`).getDownloadURL().then(url => {
        // links = [...links, url]
        return url
      })
    })
    return {name, images, id}
  })
  return projects
}
