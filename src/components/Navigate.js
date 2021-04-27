import React from 'react'
import navIcon from '../images/right-arrow.svg'
import {useHistory} from 'react-router-dom'
function Navigate(props) {

    const history = useHistory();
    //  console.log(props.nav)
     let nav = props.nav
    return (
        <div className="navigate">
            <div className="left" onClick={()=> history.goBack()}>
                <img src={navIcon}></img>
            </div>
            <div className="right" onClick={(props)=> {
                history.push(nav)
            }}>
            <img src={navIcon}></img>
            </div>
        </div>
    )
}

export default Navigate
