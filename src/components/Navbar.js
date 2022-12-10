import React from 'react'

import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'

import me from '../images/me.jpg'

import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='image-container'>
          <img src={me} alt='Lara Celic' />
      </div>
      <nav>
        <div className='navigation-links'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/projects/'>Projects</a>
          <a href='/contact/'>Contact</a>
        </div>
        <div className='social-media-icons'>
          <div className='linkdin-icon'>
            <a href='/'><AiFillLinkedin /></a>
          </div>
          <div className='instagram-icon'>
            <a href='https://www.instagram.com/lara.celic/'><AiOutlineInstagram /></a>
          </div>
          <div className='facebook-icon'>
            <a href='https://www.facebook.com/lara.celic.1'><AiFillFacebook /></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
