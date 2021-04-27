import React from 'react'
import img1 from '../images/3Dimg.svg'
import img2 from '../images/circle1.svg'
import img3 from '../images/circle2.svg'
function BgImage() {
    return (
             <div className="image">
                <div className="img1">
                    <img src={img1} alt="img1"/>
                </div>

                <div className="circle1">
                    <img src={img2} alt="circle1"/>
                </div>
                <div className="circle"></div>
                <div className="circle2">
                    <img src={img3} alt="circle2"/>
                </div>
            </div>
    )
}
    
export default BgImage
