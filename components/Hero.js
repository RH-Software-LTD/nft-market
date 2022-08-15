import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <section className='relative max-w-screen bg-hero z-10'>
      <div className='flex flex-wrap items-center justify-center lg:py-40'>
        <div className='w-1/2 flex flex-col items-center justify-center text-[#7780A1]'>
          <h3 className='font-hero font-medium uppercase mb-8 text-[15px] leading-[18px] tracking-[3px]'>Non Fungible Tokens</h3>

          <img className='mb-12' src='/hero-frame.png' alt='hero-frame' />

          <p className='font-hero text-xl'>Discover, collect and sell</p>
          <div className="hidden xl:flex mt-12 p-3 w-3/4 mx-auto focus:outline-none bg-white rounded-lg">
            <input className="w-full border-0 focus:outline-none py-2" type="text" placeholder="Items, collections and creators" />
            <select className="pl-6 pr-6 border-0 border-l border-gray-200 focus:outline-none cursor-pointer" name="" id="">
              <option data-config-id="opt1">Category</option>
              <option data-config-id="opt2">Music</option>
              <option data-config-id="opt3">Art</option>
            </select>
            <div className='text-blue-900 py-3 ml-5 px-4 text-xl'>
              <SearchIcon className='w-6 h-6 rotate-90' />
            </div>
            <div>
              <img />
              <img />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center space-x-24 mb-48'>
        <img src='logo1.png' alt='logo1' />
        <img src='logo2.png' alt='logo2' />
        <img src='logo3.png' alt='logo3' />
        <img src='logo4.png' alt='logo4' />
      </div>
      <img src='Squares.svg' alt='squares' className='absolute -z-10 bottom-20 right-[50px]' />
    </section>
  )
}

export default Hero