import React from 'react'

interface Props {
    name: string,
    image: string,
}

const PetCard = ({ name, image }: Props) => {
    return (
        <div className='w-60 h-72 bg-blue-400 flex flex-col relative'>
            <img src={image} alt="pet" className='h-full w-auto rounded-xl' />
            <div className="card-body text-red-400 bg-gray-300 w-full absolute bottom-0 text-xl pt-4 pb-6 text-center rounded-b-xl
                before:block before:w-full before:bg-gray-300 before:h-[18px] before:rounded-t-[50%] before:absolute before:bottom-[55px] object-cover">
                {name}
            </div>
        </div>
    )
}

export default PetCard