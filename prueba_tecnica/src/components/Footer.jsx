import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <ul>
            <li>Contact</li>
            <li>About</li>
            <p>hello@lenden.com</p>
        </ul>
        <ul className="brands">
            <li>
                <a href="https://www.linkedin.com/in/davidpacl3097" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/davidpa56" target="_blank">
                    <i class="fa-brands fa-twitter" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/david.pa56/" target="_blank"> 
                <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/davidpa7710" target="_blank">
                <i class="fa-brands fa-github"></i>
                </a>
            </li>
        </ul>
        <p className="copyright">Lenden© by David Palacios 2023</p>
    </div>
    )
}

export default Footer
