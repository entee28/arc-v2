import React from 'react'
import logo from '../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar w-full h-auto p-5">
            <div className="navbar-container max-w-screen-xl flex justify-between my-0 mx-auto">
                <div className="navbar-brand">
                    <img src={logo} alt="logo" className="w-32 h-auto" />
                </div>
                <ul className="navbar-nav flex items-center">
                    <NavLink to='/'>
                        <li className='transition-all p-1 mx-2 hover:opacity-70'>Cat Adoption</li>
                    </NavLink>
                    <NavLink to='/'>
                        <li className='transition-all p-1 mx-2 hover:opacity-70'>Dog Adoption</li>
                    </NavLink>
                    <NavLink to='/'>
                        <li className='transition-all p-1 mx-2 hover:opacity-70'>About Us</li>
                    </NavLink>
                    <NavLink to='/'>
                        <li className='transition-all p-1 mx-2 hover:opacity-70'>Blog</li>
                    </NavLink>
                    <NavLink to='/'>
                        <li className='transition-all p-1 mx-2 hover:opacity-70'>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar