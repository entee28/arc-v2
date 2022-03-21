import paw from '../assets/icons/paw-solid.svg'
import { Link } from 'react-router-dom'

interface Props {
    amount: number
}

const MorePetCard = ({ amount }: Props) => {
    return (
        <div className='bg-red-400 flex flex-col relative rounded-xl'>
            <div className="flex-grow flex flex-col justify-center items-center">
                <img src={paw} alt="paw" className='w-24 h-24 paw' />
                <p className='mt-8 px-6 text-center text-sm text-white'>{amount} more pets available at ARC</p>
            </div>
            <Link to='/adoption'>
                <div className="card-body uppercase bg-red-400 hover:bg-red-500 text-white w-full text-md tracking-wide font-bold pt-4 pb-4 text-center rounded-b-xl
                 object-cover border-t-2">
                    meet them
                </div>
            </Link>
        </div>
    )
}

export default MorePetCard