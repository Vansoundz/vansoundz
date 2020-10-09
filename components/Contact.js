import React, {useState, useEffect} from 'react'
import {useFeather} from '../hooks'
import {sendMessage} from '../actions'
import UIkit from 'uikit'

const Contact = (props) => {
  useFeather()
  const social = [
    {name:'linkedin', link: 'https://www.linkedin.com/in/evans-kibet/'},
    {name: 'facebook', link: 'https://www.facebook.com/muchogustoquetal'},
    {name: 'instagram', link: 'https://www.instagram.com/vansoundz/'},
    {name: 'twitter', link: 'https://twitter.com/silentEvans'}
  ]
  const socialLinks = social.forEach
  const phone = '0729732367'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading ] = useState(false)

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const onSubmit = async e => {
    e.preventDefault()
    const {name, email, message}  = formData
    if(!name.trim() || !email.trim() || !message.trim()){
      UIkit.notification({
        message: 'All fields are required',
        status: 'warning',
          pos: 'top-center',
          timeout: 30000
      })
      console.log('All fields are required')
    }else{
      setLoading(true)
      const res = await sendMessage(formData)
      console.log(res)
      if(res === true){
          UIkit.notification({
          message: 'Message sent successfully',
          status: 'success',
          pos: 'top-center',
          timeout: 2000
        });
      }else{
         UIkit.notification({
          message: 'An error occured!',
          status: 'danger',
          pos: 'top-center',
          timeout: 2000
        });
      }
      setLoading(false)
    }
  }
  return (
    <div id='contact'>
      {
        loading ? (<span uk-spinner="ratio: 4.5"></span>) : (
          <form onSubmit={onSubmit}>
            <fieldset className="uk-fieldset  uk-width-3-5@l uk-width-2-3@m  uk-width-5-6@s">
              <legend className="uk-legend">Contact</legend>
              <div className="uk-margin">
                  <input onChange={onChange} className="uk-input" id="name" type="text" placeholder="Name" />
              </div>
              <div className="uk-margin">
                  <input onChange={onChange} className="uk-input" id="email" type="email" placeholder="Email" />
              </div>
              <div className="uk-margin">
                  <textarea onChange={onChange} id="message" className="uk-textarea" rows="5" placeholder="Message"></textarea>
              </div>
              <button className="uk-button">
                Submit
              </button>
            </fieldset>
          </form>
        )
      }
      <div className="alternative">
        <div>
          <div>Call/Text/Whatsapp on {phone}</div>
          <h5>Follow me on social media</h5>
          <div id="social-links">
            {
            social && social.map((link, i) => {
              const {name, link} = link
              return <a key={i} href={link} target="_blank" > 
                      <i className={name} data-feather={name}></i>
                    </a>
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;