import React from 'react'
import heart from '../assets/icons/heart-regular.svg'

interface Props {
    name: string,
    image: string,
}

const PetCard = ({ name, image }: Props) => {
    return (
        <div className='w-60 h-72 flex flex-col relative'>
            <div className="favorite bg-white absolute top-4 right-2 w-12 h-12 rounded-full p-3">
                <img src={heart} alt="heart" className='heart' />
            </div>
            <img src={image} alt="pet" className='h-full w-auto rounded-xl' />
            <div className="card-body text-red-400 bg-white w-full absolute bottom-0 text-xl pt-4 pb-6 text-center rounded-b-xl
                before:block before:w-full before:bg-white before:h-[18px] before:rounded-t-[50%] before:absolute before:bottom-[55px] object-cover">
                {name}
            </div>
        </div>
    )
}

export default PetCard