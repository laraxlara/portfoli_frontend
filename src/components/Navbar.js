import React from 'react'

import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'

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
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='social-media-icons'>
          <div className='linkdin-icon' target="_blank">
            <a href='/' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          </div>
          <div className='instagram-icon'>
            <a href='https://www.instagram.com/lara.celic/' target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
          </div>
          <div className='facebook-icon'>
            <a href='https://www.facebook.com/lara.celic.1' target="_blank" rel="noreferrer"><AiFillFacebook /></a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
