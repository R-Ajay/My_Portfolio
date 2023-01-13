import React from "react";
import './Styles/Footer.css';
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>245E ArockiyaMatha Street</p>
                            <p>Madurai-16</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            91 7871570918</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            cmsaisanjeev@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the Company</h4>
                    <p>This is Ajay R,</p>
                    <p>I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        <FaFacebook size={20} style={{ color: '#fff', marginRight: '3rem' }} />
                        <FaTwitter size={20} style={{ color: '#fff', marginRight: '3rem' }} />
                        <FaLinkedin size={20} style={{ color: '#fff', marginRight: '3rem' }} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;