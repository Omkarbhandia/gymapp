import React from 'react'
import './Footer.css'
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
            <div className="social">
            <a href="https://instagram.com/_omkarr_._?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
             <FaInstagram size={40} style={{color:"white",marginRight:"1.5rem"}}/>
            </a>

            <a href="https://instagram.com/_omkarr_._?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} style={{color:"white",marginRight:"1.5rem"}}/>
            </a>
            <a href="https://instagram.com/_omkarr_._?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} style={{color:"white",marginRight:"1.5rem"}}/>
            </a>
            </div>

        <div className="logo-footer">
            <img src={Logo} alt="" />
        </div>
    </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>

    </div>
  )
}

export default Footer