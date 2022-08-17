import React from 'react'
import { UserCircleIcon } from '@heroicons/react/outline'


const Stats = () => {
  return (
    <section className='mt-[100px] px-4 mx-auto'>
        <div className='flex flex-wrap justify-center text-center -mx-4 gap-y-1'>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <UserCircleIcon className='text-white w-8 h-8 text-center'/>
              <h2 className="mb-2 text-5xl md:text-5xl font-bold text-white tracking-tighter leading-tight">300k</h2>
              <p className="text-lg md:text-xl text-white font-medium">Projects completed</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl font-bold text-white tracking-tighter">235.000</h2>
              <p className="text-lg md:text-xl text-white font-medium">Projects completed</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl font-bold text-white tracking-tighter">235.000</h2>
              <p className="text-lg md:text-xl text-white font-medium">Projects completed</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
              <h2 className="mb-2 text-4xl md:text-5xl font-bold text-white tracking-tighter">235.000</h2>
              <p className="text-lg md:text-xl text-white font-medium">Projects completed</p>
            </div>
        </div>
    </section>
  )
}

export default Stats