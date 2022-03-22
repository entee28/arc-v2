import { useState, useEffect } from 'react'
import sanityClient from "../../client"
import { Link } from 'react-router-dom';
import BlogCard from '../BlogCard'

const Blog = () => {
    const [postData, setPost] = useState<[] | null>(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            publishedAt,
            "author": author->name,
        }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, [])

    console.log(postData)

    return (
        <>
            <div className="w-full h-auto bg-donate bg-no-repeat bg-center bg-cover overlay-dark px-5 py-12">
                <div className="max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center">
                    <h2 className='text-4xl text-white font-bold'>Blog Posts</h2>
                </div>
            </div>

            <div className='w-full h-auto mt-20 mb-12 px-5'>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post: any, index) => <BlogCard key={index} image={post.mainImage.asset.url} title={post.title} author={post.author} date={post.publishedAt} slug={post.slug.current} />)}
                </div>
            </div>
        </>
    )
}

export default Blog