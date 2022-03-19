import React from 'react'
import pet from '../../assets/images/pet.jpg'
import PetCard from '../PetCard'

const Cat = () => {
    return (
        <div className='w-full px-5 bg-[#fffcfc]'>
            <div className="max-w-screen-xl my-0 mx-auto">
                <div className="flex flex-col items-center pt-20 pb-5">
                    <h2 className='text-red-600 text-4xl mb-20 tracking-wide'>Cats Available for Adoption</h2>
                    <div className="pets w-4/5 sm:w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                        <PetCard image={pet} name='Boo' sex='Male' age={10} status='In foster' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cat