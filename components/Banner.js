import React from 'react'

const Banner = () => {
    return (
        <section className='mt-28 mx-[280px] space-x-[118px] items-center flex flex-row'>
            <div className='flex flex-col w-2/4'>
                <span className='uppercase mb-4 text[15px] tracking-wide text-gray-500'>
                    OVERLINE
                </span>
                <h1 className='text-6xl mb-6 tracking-wide  text-white'>
                    Sapien ipsum scelerisque convallis fusce
                </h1>
                <p className='text-gray-500 w-[450px]'>
                    Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
                </p>
                <div className='text-white flex flex-row my-12 gap-10 items-center'>
                    <a className='text-white rounded-xl bg-[#4745D0] p-3 shadow-lg'>
                        Get started
                    </a>
                    <a className='text-gray-600 border-gray-500 border-[1px] p-3 rounded-xl border-opacity-30'>
                        Learn more
                    </a>
                </div>
            </div>
            <div className='w-full'>
                <img src='image-banner.png'/>
            </div>
        </section>
    )
}

export default Banner