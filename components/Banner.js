import React from 'react'

const Banner = () => {
    return (
        <section className='mt-24 w-3/4 flex flex-row justify-center space-x-[100px] items-center '>
            <div className='flex flex-col w-2/5'>
                <span className='font-InterSans uppercase mb-4 text-[15px] leading-[18px] tracking-[3px] font-semibold text-gray-500'>
                    Overline
                </span>
                <h1 className='text-6xl mb-6 tracking-[0.2px] font-semibold text-white'>
                    Sapien ipsum scelerisque <br /> convallis fusce
                </h1>
                <p className='font-InterSans leading-[150%] text-gray-500'>
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam <br /> tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </p>
                <div className='text-white flex flex-row mt-12 gap-4 text-center items-center'>
                    <a className='text-white whitespace-nowrap w-5/10 rounded-xl bg-[#4745D0] p-3 shadow-lg purple-button' href='#'>
                        Get started
                    </a>
                    <a className='text-gray-600 whitespace-nowrap w-4/10 border-gray-500 border-[1px] p-3 rounded-xl border-opacity-30' href='#'>
                        Learn more
                    </a>
                </div>
            </div>
            <div className='w-3/5 flex items-center justify-center'>
                <img className='w-4/5' src='image-banner.png' />
            </div>
        </section>
    )
}

export default Banner