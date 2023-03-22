import React from 'react'
import logo from '../assets/reactjs-icon.png'
import '../style.css'

export default function Navbar () {
    return (
        <div className='nav'>
            <div className='logo-brand'>
                <img src= {logo} className='nav-logo' />
                <h3>ReactFacts</h3>  
            </div>

            <h4>ReactCourse - Project 1</h4>
        </div>
    )
}