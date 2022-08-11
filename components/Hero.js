import React from 'react'
import {SearchIcon} from '@heroicons/react/outline'

const Hero = () => {
  return (
    <section className='relative container z-10 mx-auto px-4'>
        <div className='flex flex-wrap lg:pt-32 pb-32'>
            <div className='lg:max-w-2xl text-[#7780A1] mt-20 text-center mx-auto'>
                <h3 className='uppercase text-[15px] '>Non Fungible Tokens</h3>
                <img className='p-8' src='/hero-frame.png' alt='hero-frame' />
                <p className='text-xl'>Discover, collect and sell</p>
                <div className="hidden xl:flex mt-14 p-3 w-4/5 mx-auto focus:outline-none bg-white rounded-lg">
                  <input className="w-full border-0 focus:outline-none py-2" type="text" placeholder="Items, collections and creators"/>
                  <select className="pl-6 pr-6 border-0 border-l border-gray-200 focus:outline-none cursor-pointer" name="" id="">
                    <option data-config-id="opt1">Category</option>
                    <option data-config-id="opt2">Music</option>
                    <option data-config-id="opt3">Art</option>
                  </select>
                  <div className='text-blue-900 py-3 ml-5 px-4 text-xl'>
                    <SearchIcon className='w-6 h-6 rotate-90' />
                  </div>
                  <div>
                    <img/>
                    <img/>  
                  </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center space-x-24 mb-48'>
          <img src='logo1.png' alt='logo1'/>
          <img src='logo2.png' alt='logo2'/>
          <img src='logo3.png' alt='logo3'/>
          <img src='logo4.png' alt='logo4'/>
        </div>
        <img src='squares.png' alt='squares' className='absolute -z-10 bottom-20 right-[50px]'/>
    </section>
  )
}

export default Hero