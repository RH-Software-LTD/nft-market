import CarouselAuctions from './CarouselAuctions'

const Auctions = () => {
    return (
    <section className='w-full md:w-3/4'>
        <div className='flex lg:pt-4 pb-20 text-white justify-center'>
            <h1 className='text-lg md:text-5xl font-semibold leading-[45px] not-italic tracking-[0.2px]'>Latest Live Auctions</h1>
        </div>
         <CarouselAuctions />
    </section>
  )
}


export default Auctions