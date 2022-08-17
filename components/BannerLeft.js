const BannerLeft = () => {
    return (
        <section className='mt-[150px] mb-[100px] flex justify-center text-center md:text-start'>
            <div className='flex flex-col sm:flex-row lg:space-x-32 items-center text-white'>
                <div className='w-4/5 sm:w-1/2'>
                    <img src='left-image.png' />
                </div>
                <div className='flex flex-col w-4/5 sm:w-1/2'>
                    <span className='font-InterSans uppercase mb-4 text-[15px] leading-[18px] tracking-[3px] font-semibold text-gray-500'>
                        Overline
                    </span>
                    <h1 className='text-3xl lg:text-5xl mb-6 tracking-[0.2px] font-semibold text-white'>
                        Habitant tristique <br />aliquam in vel<br />scelerisque
                    </h1>
                    <p className='font-InterSans leading-[150%] text-[#7780A1] text-gray-500'>
                        Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar <br /> ultricies dolor feugiat aliquam commodo.
                    </p>
                    <div className='flex flex-row mt-8 items-center'>
                        <div className='flex flex-col w-1/2 sm:w-1/3 items-center md:items-start'>
                            <img src='icon.png' className='w-6 h-6' />
                            <h6 className='text-white font-semibold mt-3'>Sollicitudin sapien</h6>
                            <p className='text-gray-700 text-[14px]'>Cursus fermentum</p>
                        </div>
                        <div className='flex flex-col w-1/2 sm:w-1/3 items-center md:items-start'>
                            <img src='icon-2.png' className='w-6 h-6' />
                            <h6 className='text-white font-semibold mt-3'>Pulvinar metus</h6>
                            <p className='text-gray-700 text-[14px]'>Nunc sed</p>
                        </div>
                    </div>
                    <div className='mt-[56px] flex flex-row gap-2 sm:gap-4 justify-center md:justify-start items-center'>
                        <a className='bg-[#4745D0] text-center w-1/2 sm:w-1/5 whitespace-nowrap p-3 border-2 border-[#4745D0] border-opacity-40 rounded-xl' href='#'>
                            Get Started
                        </a>
                        <a className='w-1/2 sm:w-1/5 text-center border-2 border-gray-400 p-3 whitespace-nowrap rounded-xl' href='#'>
                            <span className='text-gray-400'>
                                Learn more
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerLeft