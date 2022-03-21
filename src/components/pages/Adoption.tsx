import pet from '../../assets/images/pet.jpg'
import PetCard from '../PetCard'
import { Link } from 'react-router-dom'
import sanityClient from '../../client'
import { useEffect, useState } from 'react'

const Adoption = () => {
    const [petData, setPet] = useState<[] | null>(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "pet"]{
            name,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            gender,
            age
        }`).then(data => setPet(data)).catch(console.error)
    }, [])

    return (
        <>
            <div className="about w-full h-auto px-5 py-12">
                <div className="about-container max-w-screen-xl mx-auto">
                    <h2 className='text-4xl text-gray-400'>Before You Adopt</h2>
                    <div className='w-8 h-[3px] bg-gray-600 mt-1 mb-6 ml-1'></div>
                    <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor ultricies pretium. Suspendisse nulla nibh, egestas ut est sed, convallis gravida nulla. Morbi fringilla, lectus sit amet dictum posuere, ex ligula venenatis velit, non ornare ante purus non lacus. Cras euismod, felis non semper mollis, diam eros eleifend felis, sed lobortis mauris nibh efficitur lectus. Curabitur vel mi at ante tincidunt egestas. Phasellus finibus gravida sem ac accumsan. Aliquam posuere libero sit amet sollicitudin blandit. Donec sodales leo a sapien luctus egestas.
                    </p>
                    <p className='text-lg mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor ultricies pretium. Suspendisse nulla nibh, egestas ut est sed, convallis gravida nulla. Morbi fringilla, lectus sit amet dictum posuere, ex ligula venenatis velit, non ornare ante purus non lacus. Cras euismod, felis non semper mollis, diam eros eleifend felis, sed lobortis mauris nibh efficitur lectus. Curabitur vel mi at ante tincidunt egestas. Phasellus finibus gravida sem ac accumsan. Aliquam posuere libero sit amet sollicitudin blandit. Donec sodales leo a sapien luctus egestas.
                    </p>
                    <div className="flex gap-4">
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeY2OYrPOrANjZbzRDzw3WNqylewD9ihabSqYMSHgenvFEF1w/formResponse' target='_blank' rel='noreferrer'>
                            <button className='mt-7 rounded-full transition-colors duration-300 border-red-400 border-2 text-black hover:text-white ease-in-out hover:bg-red-400 w-50 py-3 px-6'>Adoption Form</button>
                        </a>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse' target='_blank' rel='noreferrer'>
                            <button className='mt-7 rounded-full transition-colors duration-300 border-red-400 border-2 text-black hover:text-white ease-in-out hover:bg-red-400 w-50 py-3 px-6'>Foster Form</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='w-full px-5 bg-[#fffcfc]'>
                <div className="max-w-screen-xl my-0 mx-auto flex flex-col items-center pt-20 pb-5">
                    <h2 className='text-red-600 text-4xl mb-20 tracking-wide'>Pets Available for Adoption</h2>
                    <div className="pets w-4/5 sm:w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {petData && petData.map((pet: any, index) => <PetCard image={pet.mainImage.asset.url} name={pet.name} gender={pet.gender} age={pet.age ? pet.age : null} />)}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Adoption