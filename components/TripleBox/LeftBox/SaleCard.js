import { ClockIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'


const SaleCard = ({ imgUrl, headerText, price, timeOut, bids, fav }) => {
    return (
        <div>
            <div className='flex justify-center'>

                <img src={imgUrl} className='rounded-lg h-[355px] object-cover' />
            </div>
            <div className='flex flex-row items-center mt-4'>
                <h6 className='text-white font-semibold text-[16px]'>{headerText}</h6>
            </div>
            <div className='flex flex-row w-full justify-between items-center mt-6 gap-2'>
                <div className='flex gap-2 items-center flex-row'>
                    <ClockIcon className='h-5 w-5 text-white' />
                    <p className='text-white w-1/10'>{timeOut}</p>
                </div>
                <p className='bg-[#514CFF]/[.15] text-[#514CFF] rounded-[4px] p-2'>{price}</p>

            </div>
            <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                <span className='whitespace-nowrap text-gray-500 text-[14px]'>{bids}</span>
                <div className='flex items-center flex-row justify-end ml-8'>
                    <HeartIcon className='h-5 w-5 text-red-500' />
                </div>
            </div>
        </div>
    );
};

export default SaleCard

