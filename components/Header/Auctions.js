import React from 'react'
import { ClockIcon} from '@heroicons/react/outline'
import {HeartIcon} from '@heroicons/react/solid'

const Auctions = () => {
    return (
    <section>
        <div className='flex lg:pt-4 pb-20 text-white justify-center'>
            <h1 className='text-[32px]'>Latest live auctions</h1>
        </div>
        <div className='flex flex-row justify-center gap-6 mb-16 overflow-hidden'>
            <div className='w-[448px] h-[767px] border-[1px] border-gray-800 rounded-[24px] flex-none order-0 flex-grow-0'>
                <img src='live-auctions/auctions-order-0.png' alt='auction0' className='w-[400px] h-[520px] mx-6 my-6'/>
                <div className='flex flex-row items-center mt-6 gap-9'>
                    <h6 className='justify-start text-white w-2/3 px-6 text-[20px]'>Tristique diam a, enim, eros tellus. Viverra etiam</h6>
                    <p className='text-white bg-purple-600 rounded-[4px] p-3 left-4'>2.55 ETH</p>
                </div>
                <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                        <ClockIcon className='h-5 w-5 text-white'/>
                        <p className='text-white'>2:41 min left</p>                
                </div>
                <div className='mt-6 mx-auto w-[400px] border-t-[1px] border-gray-300 opacity-40'>
                </div>
                <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                    <img src='avatars.png' alt='avatar1' />
                    <span className='text-gray-500 text-[14px]'> 35 people are bidding</span>
                    <div className='flex items-center flex-row justify-end ml-8'>
                        <HeartIcon className='h-5 w-5 text-red-500'/>
                        <span className='text-white ml-2'>50</span>
                    </div>
                </div>
            </div>
            <div className='w-[448px] h-[767px] border-[1px] border-gray-800 rounded-[24px] flex-none order-1 flex-grow-0'>
                <img src='live-auctions/auctions-order-1.png' alt='auction1 ' className='w-[400px] h-[520px] mx-6 my-6'/>
                <div className='flex flex-row items-center mt-6 gap-9'>
                    <h6 className='justify-start text-white w-2/3 px-6 text-[20px]'>Vulputate felis purus viverra morbi facilisi eget</h6>
                    <p className='text-white bg-purple-600 rounded-[4px] p-3 left-4'>3.19 ETH</p>
                </div>
                <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                        <ClockIcon className='h-5 w-5 text-white'/>
                        <p className='text-white'>2:41 min left</p>                
                </div>
                <div className='mt-6 mx-auto w-[400px] border-t-[1px] border-gray-300 opacity-40'>
                </div>
                <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                    <img src='avatars.png' alt='avatar1' />
                    <span className='text-gray-500 text-[14px]'> 35 people are bidding</span>
                    <div className='flex items-center flex-row justify-end ml-8'>
                        <HeartIcon className='h-5 w-5 text-white'/>
                        <span className='text-white ml-2'>120</span>
                    </div>
                </div>
            </div>
            <div className='w-[448px] h-[767px] border-[1px] border-gray-800 rounded-[24px] flex-none order-2 flex-grow-0'>
                <img src='live-auctions/auctions-order-2.png' alt='auction2 ' className='w-[400px] h-[520px] mx-6 my-6'/>
                <div className='flex flex-row items-center mt-6 gap-9'>
                    <h6 className='justify-start text-white w-2/3 px-6 text-[20px]'>Dui accumsan leo vestibulum ornare eu</h6>
                    <p className='text-white bg-purple-600 rounded-[4px] p-3 left-4'>1.11 ETH</p>
                </div>
                <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                        <ClockIcon className='h-5 w-5 text-white'/>
                        <p className='text-white'>22:59 min left</p>                
                </div>
                <div className='mt-6 mx-auto w-[400px] border-t-[1px] border-gray-300 opacity-40'>
                </div>
                <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                    <img src='avatars.png' alt='avatar1' />
                    <span className='text-gray-500 text-[14px]'> 101 people are bidding</span>
                    <div className='flex items-center flex-row justify-end ml-8'>
                        <HeartIcon className='h-5 w-5 text-red-500'/>
                        <span className='text-white ml-2'>570</span>
                    </div>
                </div>
            </div>
            <div className='w-[448px] h-[767px] border-[1px] border-gray-800 rounded-[24px] flex-none order-3 flex-grow-0'>
                <img src='live-auctions/auctions-order-3.png' alt='auction3' className='w-[400px] h-[520px] mx-6 my-6'/>
                <div className='flex flex-row items-center mt-6 gap-9'>
                    <h6 className='justify-start text-white w-2/3 px-6 text-[20px]'>Senectus adipiscing nascetur accumsan etiam</h6>
                    <p className='text-white bg-purple-600 rounded-[4px] p-3 left-4'>1.11 ETH</p>
                </div>
                <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                        <ClockIcon className='h-5 w-5 text-white'/>
                        <p className='text-white'>37:01 min left</p>                
                </div>
                <div className='mt-6 mx-auto w-[400px] border-t-[1px] border-gray-300 opacity-40'>
                </div>
                <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                    <img src='avatars.png' alt='avatar1' />
                    <span className='text-gray-500 text-[14px]'> 12 people are bidding</span>
                    <div className='flex items-center flex-row justify-end ml-8'>
                        <HeartIcon className='h-5 w-5 text-red-500'/>
                        <span className='text-white ml-2'>98</span>
                    </div>
                </div>
            </div>
            <div className='border-[1px] border-gray-800 rounded-[24px] flex-none order-4 flex-grow-0'>
                <img src='live-auctions/auctions-order-4.png' alt='auction4' className='w-[400px] h-[520px] mx-6 my-6'/>
                <div className='flex flex-row items-center mt-6 gap-9'>
                    <h6 className='justify-start text-white w-2/3 px-6 text-[20px]'>Mattis at diam lorem nisl nam sed sociis</h6>
                    <p className='text-white bg-purple-600 rounded-[4px] p-3 left-4'>1.11 ETH</p>
                </div>
                <div className='flex flex-row items-center px-6 mt-6 gap-2'>
                        <ClockIcon className='h-5 w-5 text-white'/>
                        <p className='text-white'>12:15 min left</p>                
                </div>
                <div className='mt-6 mx-auto w-[400px] border-t-[1px] border-gray-300 opacity-40'>
                </div>
                <div className='flex flex-row mx-4 mt-3 gap-4 items-center'>
                    <img src='avatars.png' alt='avatar1' />
                    <span className='text-gray-500 text-[14px]'> 12 people are bidding</span>
                    <div className='flex items-center flex-row justify-end ml-8'>
                        <HeartIcon className='h-5 w-5 text-red-500'/>
                        <span className='text-white ml-2'>98</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Auctions