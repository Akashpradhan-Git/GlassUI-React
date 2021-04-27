import React from 'react'
import NavIcon from './Navigate'
import Contactimg from '../images/contact.svg'
function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <div className='contact-wrpper'>
                <div className="info-left">
                    <div className="mail">
                        <i class="far fa-envelope"></i>
                    akashpradhan151@gmail.com
                </div>
                    <div className="phone">
                        <i class="fas fa-phone-alt"></i>
                    7008061293
                </div>

                    <div className="social">
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="right">
                    <img src={Contactimg} alt="image"></img>
                </div>
            </div>

            <NavIcon />
        </div>
    )
}

export default Contact
