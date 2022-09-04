import React from 'react'

const Banner = () => {
    return (
        <section className='w-3/4 mt-24 flex flex-col-reverse sm:flex-row justify-center items-center gap-6 md:gap-0 '>
            <div className='flex flex-col w-full md:w-2/5'>
                <span className='font-InterSans uppercase mb-4 text-[15px] leading-[18px] tracking-[3px] font-semibold text-gray-500'>
                    Overline
                </span>
                <h1 className='text-sm md:text-xl lg:text-3xl mb-6 tracking-[0.2px] font-semibold text-white'>
                    Sapien ipsum scelerisque <br /> convallis fusce
                </h1>
                <p className='text-xs font-InterSans leading-[150%] text-[#7780A1] text-gray-500'>
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam <br /> tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </p>
                <div className='text-white flex flex-row mt-12 gap-4 text-center items-center'>
                    <a className='text-white whitespace-nowrap w-auto  rounded-xl bg-[#4745D0] p-3 shadow-lg purple-button' href='#'>
                        Get started
                    </a>
                    <a className='text-gray-600 whitespace-nowrap w-auto border-gray-500 border-[1px] p-3 rounded-xl border-opacity-30' href='#'>
                        Learn more
                    </a>
                </div>
            </div>
            <div className='w-full md:w-3/5 flex items-center justify-center'>
                <img className='w-4/5' src='image-banner.png' />
            </div>
        </section>
    )
}

export default Banner