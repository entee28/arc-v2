// import heart from '../assets/icons/heart-regular.svg'

interface Props {
    name: string,
    image: string,
    gender?: string,
    age?: number,
}

const PetCard = ({ name, image, gender, age }: Props) => {
    return (
        <div className='flex flex-col relative hover:scale-105 transition-all ease-out duration-200'>
            {/* <div className="favorite bg-white absolute top-4 right-2 w-12 h-12 rounded-full p-3">
                <img src={heart} alt="heart" className='heart' />
            </div> */}
            <img src={image} alt="pet" className='w-auto h-80 rounded-xl' />
            {age || gender ? (
                <div className="card-body text-red-400 bg-white w-full absolute bottom-0 text-xl pt-4 pb-4 text-center rounded-b-xl
                 before:block before:w-full before:bg-white before:h-[18px] before:rounded-t-[50%] before:absolute before:bottom-[80px] object-cover">
                    {name}
                    <br />
                    <span className='text-sm text-black'>{gender} {age ? ` - ${age} months old` : null}</span>
                </div>
            ) : (
                <div className="card-body text-red-400 bg-white w-full absolute bottom-0 text-xl pt-4 pb-6 text-center rounded-b-xl
                before:block before:w-full before:bg-white before:h-[18px] before:rounded-t-[50%] before:absolute before:bottom-[55px] object-cover">
                    {name}
                </div>
            )}
        </div>
    )
}

export default PetCard