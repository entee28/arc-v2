import React from 'react'
import PetCard from '../PetCard'
import pet from '../../assets/images/pet.jpg'
import MorePetCard from '../MorePetCard'

const Home = () => {
    return (
        <div>
            <div className="hero w-full h-hero bg-hero bg-no-repeat bg-top bg-cover opacity-80 px-5">
                <div className="hero-container max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center">
                    <h2 className='text-5xl text-white mb-6 tracking-wide'>Welcome to ARC Pet Rescue, HCMC</h2>
                    <p className='text-white text-2xl mb-8'>We rescue cats and dogs in need. And we need your help!</p>
                    <button className='rounded-full transition-colors duration-200 bg-red-600 hover:bg-red-400 w-fit py-3 px-6 text-white'>Adopt One</button>
                </div>
            </div>

            <div className="available-pet w-full h-auto bg-[#fdf0f0] px-5">
                <div className="available-pet-container max-w-screen-xl mx-auto my-0 flex flex-col items-center pt-36 pb-10">
                    <h2 className='text-red-600 text-4xl mb-8 tracking-wide'>Pets Available for Adoption</h2>
                    <div className="pets flex gap-4">
                        <PetCard image={pet} name='Boo' />
                        <PetCard image={pet} name='Boo' />
                        <PetCard image={pet} name='Boo' />
                        <PetCard image={pet} name='Boo' />
                        <MorePetCard />
                    </div>
                </div>
            </div>

            <div className="info w-full h-auto py-12 px-5">
                <div className="info-container max-w-screen-xl w-full mx-auto flex flex-col items-center">
                    <h2 className='text-3xl'>Planning to Adopt a Pet?</h2>
                    <div className="info-body flex justify-evenly w-full mt-10">
                        <div className="info-content text-center w-1/3">
                            <h3 className='text-2xl text-blue-600 my-3'>Pet Adoption FAQs</h3>
                            <p className='mt-3 mb-6 text-sm'>Get answers to questions you haven't thought of.</p>
                            <button className='rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200'>Learn More</button>
                        </div>
                        <div className="info-content text-center w-1/3">
                            <h3 className='text-2xl text-blue-600 my-3'>Foster Form</h3>
                            <p className='mt-3 mb-6 text-sm'>Do you want to help us by giving temporary shelter to our animals? Do you love animals but don't stay for long in Vietnam? Then join our foster program.</p>
                            <button className='rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200'>Learn More</button>
                        </div>
                        <div className="info-content text-center w-1/3">
                            <h3 className='text-2xl text-blue-600 my-3'>Adoption Form</h3>
                            <p className='mt-3 mb-6 text-sm'>Interested in giving a forever home to our animals?</p>
                            <button className='rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200'>Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home