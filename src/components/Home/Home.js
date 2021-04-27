import React from 'react'
import Icon from './Icon'
import {useHistory} from 'react-router-dom'
function Home(props) {

    const History = useHistory();
    

    return (
        <div className="home">
            <div>Logo</div>
            <div className="wrapper-home">
                <div className="text">
                    <h3>Hello</h3>
                    <h1>This is <span>Akash</span></h1>
                    <h3>A <span>Web</span> Developer</h3>
                    <div className="skill">
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>NodeJS</p>
                    </div>
                    <div className="Button-wrapper">
                        <button className="hire">
                            Hire Me
                        </button>
                        <button className="contact">
                            Contact Me
                        </button>
                    </div>
                    <div className="icon">
                        <div className='hand'>
                            <img src={props.Hand} alt="hand" />
                        </div>

                        <Icon insta={props.insta} link={props.link} face={props.face} git={props.git} />
                    </div>
                </div>

                <div className="home-image">
                    <img src={props.AboutImg} alt="about" />
                </div>


                <div className="arrow" onClick={() =>History.push('/about') }>
                    <img src={props.RightArrow} alt="right-arrow" />
                </div>
            </div>




        </div>
    )
}

export default Home
