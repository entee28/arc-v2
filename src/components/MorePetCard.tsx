import React from 'react'
import paw from '../assets/icons/paw-solid.svg'

const MorePetCard = () => {
    return (
        <div className='w-60 h-72 bg-red-400 flex flex-col relative rounded-xl'>
            <div className="flex-grow flex flex-col justify-center items-center">
                <img src={paw} alt="paw" className='w-24 h-24 paw' />
                <p className='mt-8 px-6 text-center text-sm text-white'>26 more pets available at ARC</p>
            </div>
            <div className="card-body uppercase bg-red-400 hover:bg-red-500 text-white w-full text-md tracking-wide font-bold pt-4 pb-4 text-center rounded-b-xl
                 object-cover border-t-2">
                meet them
            </div>
        </div>
    )
}

export default MorePetCard