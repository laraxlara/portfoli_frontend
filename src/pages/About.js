import React from 'react'

import Layout from '../components/layout'

import '../styles/About.css'

const About = () => {
  const fileUrl = 'https://laracelic-api.onrender.com/download'
  
  return (
    <Layout>
    <div className='about-page-container'>
        <div className='about-page-wrapper'>
            <div className='box'>
                <div className='box-content'>
                    <h1>About Me</h1>
                    <h2>Web Design and Development</h2>
                    <p>
                      I'm Lara Celic, a 24 year old web developer from Novi Sad, Serbia. I design and develop unique, accessible and user-friendly websites that convert visitors into customers and make businesses grow. When I create websites I strive for perfectionism and constant pushing of boundaries. Now that you know a bit more about me, check out my portfolio and CV and if you are interested in cooperation or have any kind of question, head over to the contact page and send me an email! 
                    </p>
                    <a href={fileUrl} download>Download my CV</a>
                </div>
            </div>
        </div>    
    </div>
    </Layout>
  )
}

export default About
