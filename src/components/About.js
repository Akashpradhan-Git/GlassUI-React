import React from 'react'
import NavIcon from './Navigate'
import { useHistory } from 'react-router-dom';
import about from '../images/about.svg'
function About() {

    return (
        <div className='aboutContainer'>
            <h2>About Me</h2>
            <div className="wrapper">
                <div className="leftSec">
                    <img src={about}></img>
                </div>
                <div className="right">
                    <p>i am a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019. The web development community is a big part of my life. I love to teaching code, managing online programming groups and blogs or attending a conference, I find keeping involved helps me stay up to date.</p>
                    <div className="btn">
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
            <NavIcon nav={'/service'}/>
        </div>
    )
}

export default About
