import React from 'react'
import { ClockIcon} from '@heroicons/react/outline'
import { HeartIcon} from '@heroicons/react/solid'


const Listbanner = () => {
  return (
    <section className='mt-[150px] flex flex-row justify-center space-x-6 text-white'>
      <div className='box-border border-[1px] rounded-2xl border-gray-800 border-opacity-20 mb-12'>
        <h5 className='text-3xl leading-10 flex items-center mt-10 ml-10'>
          Check out the <br/>hottest Sale offers
        </h5>
        <div className='box-border flex space-x-6 mt-10 ml-10'>
          <div className=''>
             <img src='item-1.png' className='w-[212px] h-[355px] mb-4'/>
             Fames habitasse risus<br/>
             ultricies tortor sit
             <div className='flex flex-row items-center gap-1 my-3'>
                <ClockIcon className='h-4 w-4 text-white'/>
                <p className='text-white text-[14px]'>2:41 min left</p>
                <p className='text-white text-xs ml-12 p-2 bg-purple-600 rounded-[4px]'>3.19 ETH</p>                
              </div>
              <div className='flex flex-row space-x-16 items-center border-t-[1px] border-opacity-20 border-gray-400'>
                <span className='text-[12px] my-2'>101 people are bidding</span>
                <HeartIcon className='h-5 w-5 text-red-500'/>
              </div>
          </div>
        </div>
      </div>
      <div>
        aaaaaaaaaaaa
      </div>
      <div>
        aaaaaaaaaaaa
      </div>
    </section>
  )
}

export default Listbanner