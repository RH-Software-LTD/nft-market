import { ClockIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'


const SaleCard = ({ imgUrl, headerText, price, timeOut, bids, fav }) => {
    return (
        <div className="flex flex-row gap-4 items-center">
            <div className='flex w-1/3 h-max'>

                <img src={imgUrl} className='rounded-3xl' />
            </div>

            <div className="flex w-2/3 flex-col">
                <p className="text-white">{headerText}</p>
                <div className='flex flex-row items-center justify-between my-3'>
                    <div className='flex flex-row gap-2'>
                        <ClockIcon className='h-5 w-5 text-white' />
                        <p className='text-white'>{timeOut}</p>
                    </div>
                    <div>
                        <p className='bg-[#514CFF]/[.15] text-[#514CFF] rounded-[4px] p-2'>{price}</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='whitespace-nowrap text-gray-500 text-[14px]'>{bids}</span>
                    <div className='flex items-center flex-row justify-end ml-8'>
                        <HeartIcon className='h-5 w-5 text-red-500' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleCard

