import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import sanityClient from '../../client';
//@ts-ignore
import BlockContent from "@sanity/block-content-to-react"
import AdoptionInfo from '../AdoptionInfo';
import AvailablePets from '../AvailablePets';


const PetDetail = () => {
    const { slug } = useParams();
    const [singlePost, setSinglePost] = useState<any | null>(null);

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            age,
            gender,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            desc,
            publishedAt
        }`).then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost)
        return (
            <div className="flex h-screen">
                <div className="cube">
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                    <div className="side"></div>
                </div>
            </div>
        )

    return (
        <>
            <div className='w-full h-auto px-5 mb-20'>
                <div className='max-w-screen-xl mx-auto my-0'>
                    <div className='mt-14 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8'>
                        <img src={singlePost.mainImage.asset.url} alt="Pet pic" className='w-full h-auto' />
                        <div>
                            <h2 className='text-5xl font-bold mb-4'>{singlePost.title}</h2>
                            <p className='py-2 border-black border-dashed border-b-2'>
                                <span className='font-bold'>Age: </span>
                                {singlePost.age && `${singlePost.age} months old`}
                            </p>
                            <p className='py-2 border-black border-dashed border-b-2'>
                                <span className='font-bold'>Gender: </span>
                                {singlePost.gender}
                            </p>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h2 className='text-4xl text-black'>About</h2>
                        <div className='w-8 h-[3px] bg-gray-600 mt-1 mb-6 ml-1'></div>
                        <div className='text-lg'>
                            <BlockContent blocks={singlePost.desc} projectId="mkca6boi" dataset="production" />
                        </div>
                    </div>
                </div>
            </div>
            <AvailablePets />

            <AdoptionInfo />

        </>

    )
}

export default PetDetail