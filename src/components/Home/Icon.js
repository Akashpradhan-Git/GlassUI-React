import React from 'react'

function Icon(props) {
    return (
        <div className="social">
            <img src={props.link} alt="linkdin"/>
            <img src={props.git} alt="Github"/>
            <img src={props.insta} alt="insta"/>
            <img src={props.face} alt="facebook"/>
        </div>
    )
}

export default Icon
