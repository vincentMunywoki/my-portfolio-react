import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png";
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo }alt="" />
                <p>I am a tech enthusiast with a strong belief in the transformative power of technology to shape the future. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <textarea name="text" rows="1" placeholder='Share your suggeston here...'></textarea>
                </div>
                <div className="footer-subscribe">Send</div>
            </div>        
        </div> */}
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2025 Vincent Munywoki. All rights reserved.</p>
            <div className="footer-bottom-right">
            <a className='anchor-link' href="#"><p>Term of services</p></a>
                <a className='anchor-link' href="#"><p>Privacy policy</p></a>
                <a className='anchor-link' href="#contact"><p>Connect with me</p></a> 
            </div>
        </div>
    </div>
    
  )
}

export default Footer
