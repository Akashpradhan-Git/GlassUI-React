import React from 'react'
import Navigate from './Navigate'
import WebImg from '../images/serviceWeb.svg'
import MobImg from '../images/serviceMob.svg'
import UIImg from '../images/serviceUI.svg'
import img1 from '../images/about.svg'
function Skils() {
    return (
        <div className="service">
            <h2>Services I Offers</h2>
            <div className="cards">
                <div className="card">
                    <div>
                        <img src={WebImg} alt="card1"></img>
                    </div>

                    <div className="text">
                        <p>Web Developement</p>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={MobImg} alt="card1"></img>
                    </div>

                    <div className="text">
                        <p>Mobile App</p>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={UIImg} alt="card1"></img>
                    </div>

                    <div className="text">
                        <p>UI/UX Design</p>
                    </div>
                </div>
            </div>
            <Navigate nav={'/contact'} />
        </div>
    )
}

export default Skils
