import React from 'react'
import PetCard from '../PetCard'
import pet from '../../assets/images/pet.jpg'

const Home = () => {
    return (
        <div>
            <div className="hero w-full h-hero bg-hero bg-no-repeat bg-top bg-cover opacity-80">
                <div className="hero-container max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center">
                    <h2 className='text-5xl text-white mb-6 tracking-wide'>Welcome to ARC Pet Rescue, HCMC</h2>
                    <p className='text-white text-2xl mb-8'>We rescue cats and dogs in need. And we need your help!</p>
                    <button className='rounded-full transition-colors duration-20000 bg-red-600 hover:bg-red-400 w-fit py-3 px-6 text-white'>Adopt One</button>
                </div>
            </div>
            {/* <PetCard image={pet} name='Boo' /> */}
        </div>
    )
}

export default Home