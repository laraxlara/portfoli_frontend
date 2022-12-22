import React, { useState } from 'react'
import Layout from '../components/layout'
import axios from 'axios'

import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

import contact from '../videos/contact2.mp4'

import '../styles/Contact.css'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleStateChange = async e => {
    e.preventDefault()
    setSent(true)
    try {
      const response = await fetch('https://laracelic-api.onrender.com/send', {
        name,
        email,
        message
      })
        .then((response) => res.json())
        .then((data) => setMessage(data.message));
        console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Layout>
    <div className='contact-page-container'>
        <div className='contact-page-wrapper'>

          <div className='contact-info-wrapper'>
            <div className='contact-info'>
                <div className='info'>
                  <h1>Get in touch with me</h1>
                  <p>If you are interested in collaboration, need an outstanding website for your business or have any other kind of question just fill out the form.</p>
                  <h2>Contact Information</h2>
                  <h3>&#8594; laraa.celic7@gmail.com</h3>
                  <h3>&#8594; laraxlara97@gmail.com</h3>
                  <h3>&#8594; Novi Sad, Serbia</h3>
                  <div className='social-media-icons-contact'>
                    <div className='social-media-icon' target="_blank">
                      <a href='https://www.linkedin.com/in/lara-celic-90565b25b/' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                    </div>
                    <div className='social-media-icon'>
                      <a href='https://www.instagram.com/lara.celic/' target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
                    </div>
                    <div className='social-media-icon'>
                      <a href='https://www.facebook.com/lara.celic.1' target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                    </div>
                    <div className='social-media-icon'>
                      <a href='https://github.com/laraxlara' target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className='form-wrapper'>
            <form onSubmit={handleStateChange}>
              <input placeholder="Name" onChange={e => setName(e.target.value)} value={name} required />
              <input placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
              <textarea cols="52" rows="7" placeholder="Message" onChange={e => setMessage(e.target.value)} value={message} required></textarea>
              <button type='submit'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
      </Layout>
  )
}

export default Contact
