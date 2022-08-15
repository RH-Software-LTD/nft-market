
import { ClockIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'


const AuctionCard = ({ imgUrl, headerText, price, timeOut, bids, fav }) => {
    return (
        <>
            <div className='flex justify-center'>

                <img src={imgUrl} alt='auction0' className='w-[400px] h-[520px] mx-6 my-6 rounded-lg' />
            </div>
            <div className='flex flex-row items-center mt-6 gap-9'>
                <h6 className='justify-start text-white w-2/3 px-6 text-[20px]'>{headerText}</h6>
                <p className='text-white bg-purple-600 rounded-[4px] p-3 left-4'>{price}</p>
            </div>
            <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                <ClockIcon className='h-5 w-5 text-white' />
                <p className='text-white'>{timeOut}</p>
            </div>
            <div className='mt-6 mx-auto w-[400px] border-t-[1px] border-gray-300 opacity-40'>
            </div>
            <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                <img src='avatars.png' alt='avatar1' />
                <span className='text-gray-500 text-[14px]'>{bids}</span>
                <div className='flex items-center flex-row justify-end ml-8'>
                    <HeartIcon className='h-5 w-5 text-red-500' />
                    <span className='text-white ml-2'>{fav}</span>
                </div>
            </div>
        </>
    );
};

export default AuctionCard

