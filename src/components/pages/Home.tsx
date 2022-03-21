import React from 'react'
import PetCard from '../PetCard'
import pet from '../../assets/images/pet.jpg'
import MorePetCard from '../MorePetCard'
import useWindowDimensions from '../../utils/useWindowDimensions'

const Home = () => {
    const { width, height } = useWindowDimensions();

    return (
        <div>
            <div className="hero w-full h-hero bg-hero bg-no-repeat bg-top bg-cover opacity-80 px-5">
                <div className="hero-container max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center items-center lg:items-start">
                    <h2 className='text-4xl md:text-5xl text-center text-white mb-6 tracking-wide'>Welcome to ARC Pet Rescue, HCMC</h2>
                    <p className='text-white text-xl text-center md:text-2xl mb-8'>We rescue cats and dogs in need. And we need your help!</p>
                    <button className='rounded-full transition-colors duration-200 bg-red-600 hover:bg-red-400 w-fit py-3 px-6 text-white'>Adopt One</button>
                </div>
            </div>

            <div className="available-pet w-full h-auto bg-[#fdf0f0] px-5">
                <div className="available-pet-container max-w-screen-xl mx-auto my-0 flex flex-col items-center pt-36 pb-10">
                    <h2 className='text-red-600 text-4xl mb-8 tracking-wide text-center'>Pets Available for Adoption</h2>
                    <div className="pets grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <PetCard image={pet} name='Boo' />
                        <PetCard image={pet} name='Boo' />
                        <PetCard image={pet} name='Boo' />
                        {width < 1024 ? null : <PetCard image={pet} name='Boo' />}
                        <MorePetCard />
                    </div>
                </div>
            </div>

            <div className="info w-full h-auto py-12 px-5">
                <div className="info-container max-w-screen-xl w-full mx-auto flex flex-col items-center">
                    <h2 className='text-3xl text-center'>Interested in supporting us?</h2>
                    <div className="info-body flex flex-col px-8 lg:p-0 lg:flex-row justify-center w-full mt-10">
                        <div className="info-content text-left lg:text-center grow-[1] basis-0 py-4">
                            <h3 className='text-2xl text-blue-600 my-3'>Volunteer Form</h3>
                            <p className='mt-3 mb-6 leading-6 text-md lg:text-sm'>Do you want to join our team? Do you have a passion for working with animals? Want to help us on certain field? Found out more about our volunteer program and join us.&nbsp;
                                <a rel="noreferrer" className='text-blue-400 hover:text-blue-700 transition-colors duration-300 ease-in-out inline-block lg:hidden' href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse" target='_blank'>
                                    Learn More
                                </a>
                            </p>
                            <a rel="noreferrer" className='hidden lg:inline-block' href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse" target='_blank'>
                                <button className='rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200'>Learn More</button>
                            </a>
                        </div>
                        <div className="info-content text-left lg:text-center grow-[1] basis-0 py-4">
                            <h3 className='text-2xl text-blue-600 my-3'>Foster Form</h3>
                            <p className='mt-3 mb-6 leading-6 text-md lg:text-sm'>Do you want to help us by giving temporary shelter to our animals? Do you love animals but don't stay for long in Vietnam? Then join our foster program.&nbsp;
                                <a rel="noreferrer" className='text-blue-400 hover:text-blue-700 transition-colors duration-300 ease-in-out inline-block lg:hidden' href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse" target='_blank'>
                                    Learn More
                                </a>
                            </p>
                            <a rel="noreferrer" className='hidden lg:inline-block' href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse" target='_blank'>
                                <button className='rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200'>Learn More</button>
                            </a>
                        </div>
                        <div className="info-content text-left lg:text-center grow-[1] basis-0 py-4">
                            <h3 className='text-2xl text-blue-600 my-3'>Adoption Form</h3>
                            <p className='mt-3 mb-6 leading-6 text-md lg:text-sm'>Interested in giving a forever home to our animals?&nbsp;
                                <a rel="noreferrer" className='text-blue-400 hover:text-blue-700 transition-colors duration-300 ease-in-out inline-block lg:hidden' href="https://docs.google.com/forms/d/e/1FAIpQLSeY2OYrPOrANjZbzRDzw3WNqylewD9ihabSqYMSHgenvFEF1w/formResponse" target='_blank'>
                                    Learn More
                                </a>
                            </p>
                            <a rel="noreferrer" className='hidden lg:inline-block' href="https://docs.google.com/forms/d/e/1FAIpQLSeY2OYrPOrANjZbzRDzw3WNqylewD9ihabSqYMSHgenvFEF1w/formResponse" target='_blank'>
                                <button className='rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200'>Learn More</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home