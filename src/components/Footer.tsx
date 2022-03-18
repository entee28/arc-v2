import React from 'react'
import facebook from '../assets/icons/facebook-brands.svg'

const Footer = () => {
    return (
        <footer>
            <div className="divider"></div>
            <div className='w-full h-auto px-5'>
                <div className="max-w-screen-xl mx-auto">
                    <button className='social'><img src={facebook} alt="facebook" /></button>
                    <p className='text-sm'>ARC is a not for profit charity.
                        <br />
                        Our mission is to initiate and facilitate care, advocacy and awareness for animals in need in Vietnam</p>
                    <p className='text-gray-400 my-4'>©️ 2022 ARC. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer