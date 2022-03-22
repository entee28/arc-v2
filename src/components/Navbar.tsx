import React from 'react'
import logo from '../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar w-full h-auto p-5">
            <div className="navbar-container max-w-screen-xl flex justify-between my-0 mx-auto">
                <div className="navbar-brand">
                    <NavLink to='/'>
                        <img src={logo} alt="logo" className="w-32 h-auto" />
                    </NavLink>
                </div>
                <ul className="navbar-nav flex items-center">
                    <NavLink to='/adoption'>
                        <li className='transition-all p-1 mx-6 hover:opacity-70'>Pets Adoption</li>
                    </NavLink>
                    <NavLink to='/blog'>
                        <li className='transition-all p-1 mx-6 hover:opacity-70'>Blog</li>
                    </NavLink>
                    <NavLink to='/contact'>
                        <li className='transition-all p-1 mx-6 hover:opacity-70'>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar