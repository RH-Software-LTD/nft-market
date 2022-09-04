import { ClockIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'


const AuctionCard = ({ imgUrl, headerText, price, timeOut, bids, fav }) => {
    return (
        <div>
            <div className='flex justify-center'>
                <img src={imgUrl} className='my-0 md:my-2 lg:my-4 rounded-lg' />
            </div>
            <div className='flex flex-col items-center justify-center mt-6 md:mt-4 lg:mt-2 px-3 gap-9'>
                <span className='justify-start text-white w-full text-xs h-12 md:h-full'>{headerText}</span>
                <p className='text-white bg-purple-600 rounded-[4px] text-xs md:text-md p-2 md:px-4 md:py-1'>{price}</p>
            </div>
            <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                <ClockIcon className='h-5 w-5 text-white' />
                <p className='text-white text-xs md:text-md'>{timeOut}</p>
            </div>
            <div className='mt-6 w-full border-t-[1px] border-gray-300 opacity-40'>
            </div>
            <div className='flex flex-col mx-4 mt-3 mb-2 gap-4 items-center justify-center'>
                <div className='w-full md:w-1/2'>
                    <img src='avatars.png' alt='avatar1' />
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <span className='text-gray-500 text-xs md:text-md'>{bids}</span>
                    <div className='flex items-center flex-row justify-end '>
                        <HeartIcon className='h-5 w-5 text-red-500' />
                        <span className='text-white ml-2'>{fav}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuctionCard

