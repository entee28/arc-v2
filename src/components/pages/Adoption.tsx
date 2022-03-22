import PetCard from '../PetCard'
import { Link } from 'react-router-dom'
import sanityClient from '../../client'
import { useEffect, useState } from 'react'
import AdoptionInfo from '../AdoptionInfo'

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
            <AdoptionInfo />

            <div className='w-full px-5 bg-[#fffcfc]'>
                <div className="max-w-screen-xl my-0 mx-auto flex flex-col items-center pt-20 pb-5">
                    <h2 className='text-red-600 text-4xl mb-20 tracking-wide'>Pets Available for Adoption</h2>
                    <div className="pets w-4/5 sm:w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {petData && petData.map((pet: any, index) => <Link key={index} to={'/adoption/' + pet.slug.current}><PetCard image={pet.mainImage.asset.url} name={pet.name} gender={pet.gender} age={pet.age ? pet.age : null} /></Link>)}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Adoption