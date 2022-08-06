import React from 'react'
import { ClockIcon } from '@heroicons/react/outline'

const Auctions = () => {
    return (
    <section>
        <div className='flex lg:pt-32 pb-20 text-white justify-center'>
            <h1 className='text-[32px]'>Latest live auctions</h1>
        </div>
        <div className='flex flex-row justify-center gap-6 mb-16'>
            <div className='w-[448px] h-[700px] border-[1px] border-gray-800 rounded-[24px] flex-none order-2 flex-grow-0'>
                <img src='live-auctions/auctions-order-2.png' alt='auction2 ' className='px-6 py-6'/>
                <div className='flex flex-row items-center space-x-5'>
                    <h6 className='justify-start text-white w-2/3 px-6 mt-2 text-[20px]'>Dui accumsan leo vestibulum ornare eu</h6>
                    <div className='justify-end rounded-lg bg-purple-800 p-2'>
                        <p className='text-white'>1.11 ETH</p>
                    </div>
                </div>
                <div className='flex items-center space-x-5'>
                    <div>
                        <ClockIcon className='h-8 w-8 text-white'> min left</ClockIcon>
                        <p className='justify-start px-6 text-white'> min left
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Auctions