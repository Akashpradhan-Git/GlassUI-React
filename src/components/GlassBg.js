import React from 'react'
import Home from './Home/Home'
import About from './About'
import Service from './Services'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
 
import RightArrow from '../images/right-arrow.svg'
import AboutImg from '../images/coding1.svg'
import Hand from '../images/Hand.svg'

import Linkdin from '../images/linkedin.svg'
import GitHub from '../images/github.svg'
import insta from '../images/instagram.svg'
import facebook from '../images/facebook.svg'

function GlassBg() {
 
    return (
        <div className='GlassBg'>
            <Router>
                <Switch>
                    <Route path='/' exact>
                    <Home RightArrow={RightArrow} AboutImg={AboutImg} Hand={Hand} link={Linkdin} git={GitHub} insta={insta} face={facebook}/>
                    </Route>

                    <Route path='/about' exact>
                        <About/>
                    </Route>

                    <Route path='/service' exact>
                        <Service/>
                    </Route>

                    <Route path='/contact' >
                        <Contact/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default GlassBg
