export const projectsReducer = (state, action) => {
  const {type, payload} = action
  switch(type){
    case 'LOAD_PROJECTS':
      return payload
      
    case 'PROJECT_IMAGE':
      const projects = state.map(p => {
        if(p.id === payload.id){
          if(typeof p.images[0] === 'object'){
            p.images = []
            p.images = [...p.images, payload.url]
          }else{
            p.images = [...p.images, payload.url]
          }
        }
      })
      
      return state
      
    default:
      return state
  }
}