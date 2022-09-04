import { SearchIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <section className='sm:relative max-w-screen bg-hero z-10 flex flex-col items-center mb-8 md:mb-16 lg:mb-48'>
      <div className='flex flex-wrap items-center justify-center md:py-20 lg:py-60'>
        <div className='w-10/12 md:w-1/2 flex flex-col items-center justify-center text-[#7780A1]'>
          <span className='whitespace-nowrap font-InterSans font-medium uppercase mb-4 md:mb-8 text-[10px] md:text-base md:leading-[18px] tracking-[3px]'>
            Non Fungible Tokens
          </span>

          <img src='/hero-frame.png' alt='hero-frame' />

          <p className='font-InterSans text-xs sm:text-xl my-4 lg:my-12'>Discover, collect and sell</p>

        </div>
      </div>
      <div className='flex flex-row w-1/2 sm:w-1/3  justify-center gap-3'>
        <img src='logo1.svg' alt='logo1' className='w-1/4' />
        <img src='logo2.svg' alt='logo2' className='w-1/4' />
        <img src='logo3.svg' alt='logo3' className='w-1/4' />
        <img src='logo4.svg' alt='logo4' className='w-1/4' />
      </div>
      <img src='Squares.svg' alt='squares' className='hidden md:flex absolute md:top-10 lg:top-52 -z-10 w-full' />
    </section>
  )
}

export default Hero