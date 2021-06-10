import React from 'react';
import brain from './brain.png'
import Tilt from 'react-parallax-tilt'
import logo from './logo.css'
const Logo = () => {
    return(
        <div className='logo'>
        <Tilt className='Tilt'>
            <img src={brain} alt='logo'/>
        </Tilt>
        </div>
    );
}



export default Logo;