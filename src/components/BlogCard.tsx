import { Link } from 'react-router-dom'

interface Props {
    title: string,
    date: string,
    author: string,
    image: string,
    slug: string
}

const BlogCard = (props: Props) => {
    return (
        <Link to={'/blog/' + props.slug}>
            <div className='w-full h-auto bg-[#e6e6e6] pt-8 rounded-md hover:scale-105 transition-all ease-in-out duration-300'>
                <p className='text-sm text-gray-500 px-8 mb-2'>{props.date}</p>
                <h2 className='font-bold text-2xl px-8 mb-4'>{props.title}</h2>
                <p className='text-sm text-black px-8 mb-4'>{`By ${props.author}`}</p>
                <img src={props.image} alt="blog" className='h-72 w-full object-cover rounded-b-md' />
            </div>
        </Link>
    )
}

export default BlogCard