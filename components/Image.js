import React from 'react'
import uuid from 'uuid/v4'

const Image = ({ image}) => {
  const id = uuid()
  if(typeof image === 'object'){
    image.then(url => {
      document.getElementById(id).src = url
    })
  }
  return (
    <div className="project-image">
      <img id={id} src={ image} />
    </div>
  )
}

export default Image;