import React, { useReducer, createContext} from 'react'
import { projectsReducer } from '../reducers/projects'

export const ProjectContext = createContext()


const ProjectContextProvider = ({children}) => {
  const [projects, dispatch] = useReducer(projectsReducer, [])
  return (
    <ProjectContext.Provider value={{projects, dispatch}}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider