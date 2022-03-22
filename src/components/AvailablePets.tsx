import { useState, useEffect } from 'react'
import useWindowDimensions from '../utils/useWindowDimensions'
import PetCard from './PetCard'
import MorePetCard from './MorePetCard'
import sanityClient from '../client';
import { Link } from 'react-router-dom';


const AvailablePets = () => {
    const { width } = useWindowDimensions();
    const [petData, setPet] = useState<[] | null>(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "pet"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then(data => setPet(data)).catch(console.error)
    }, [])

    return (
        <div className="available-pet w-full h-auto bg-[#fdf0f0] px-5">
            <div className="available-pet-container max-w-screen-xl mx-auto my-0 flex flex-col items-center pt-36 pb-10">
                <h2 className='text-red-600 font-bold text-4xl mb-8 text-center'>Pets Available for Adoption</h2>
                <div className="pets grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {width >= 1024 && petData && petData.map((pet: any, index) => {
                        if (index < 4) {
                            return <Link key={index} to={'/adoption/' + pet.slug.current}><PetCard image={pet.mainImage.asset.url} name={pet.title} /></Link>
                        }
                    })}

                    {width < 1024 && petData && petData.map((pet: any, index) => {
                        if (index < 3) {
                            return <Link key={index} to={'/adoption/' + pet.slug.current}><PetCard image={pet.mainImage.asset.url} name={pet.title} /></Link>
                        }
                    })}


                    {width >= 1024 && petData && petData.length > 4 && <MorePetCard amount={petData.length - 4} />}
                    {width < 1024 && petData && petData.length > 3 && <MorePetCard amount={petData.length - 3} />}
                </div>
            </div>
        </div>
    )
}

export default AvailablePets