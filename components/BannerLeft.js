import React from 'react'

const BannerLeft = () => {
  return (
    <section className='mt-[150px] mb-[100px] flex justify-center'>
        <div className='flex flew-row space-x-32 items-center text-white'>
            <div className='w-[684px] h-[616px]'>
                <img src='left-image.png'/>
            </div>
            <div className='flex flex-col w-1/2'>
                <span className='text-[15px] text-gray-400 uppercase'>overline</span>
                <h1 className='text-white text-6xl font-semibold leading-tight'>
                Habitant tristique <br/>aliquam in vel<br/>scelerisque
                </h1>
                <p className='text-base leading-loose text-[#7780A1]'>
                Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar <br/> ultricies dolor feugiat aliquam commodo.
                </p>
                <div className='flex flex-row space-x-10 mt-8 items-center'>
                    <div className='flex flex-col'>
                        <img src='icon.png' className='w-6 h-6'/>
                        <h6 className='text-white font-semibold mt-3'>Sollicitudin sapien</h6>
                        <p className='text-gray-700 text-[14px]'>Cursus fermentum</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src='icon-2.png' className='w-6 h-6'/>
                        <h6 className='text-white font-semibold mt-3'>Pulvinar metus</h6>
                        <p className='text-gray-700 text-[14px]'>Nunc sed</p>
                    </div>
                </div>
                <div className='mt-[56px] flex flex-row space-x-4 items-center'>
                    <a className='bg-[#4745D0] p-3 border-2 border-[#4745D0] border-opacity-40 rounded-xl' href='#'>
                            Get Started
                    </a>
                    <a className='border-2 border-gray-400 p-3 rounded-xl' href='#'>
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