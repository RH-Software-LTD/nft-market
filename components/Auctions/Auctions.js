import React from 'react'
import CarouselAuctions from './CarouselAuctions'
import { ClockIcon} from '@heroicons/react/outline'
import {HeartIcon} from '@heroicons/react/solid'

const Auctions = () => {
    return (
    <section>
        <div className='flex lg:pt-4 pb-20 text-white justify-center'>
            <h1 className='text-[36px] font-semibold leading-[45px] not-italic tracking-[0.2px]'>Latest live auctions</h1>
        </div>
         <CarouselAuctions />
    </section>
  )
}


export default Auctions