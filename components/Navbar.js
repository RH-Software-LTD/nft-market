import React from 'react'

const Navbar = () => {
  return (
    <section className='max-w-screen px-4 sm:px-6 lg:px-8'> 
        <div className='flex items-center justify-between h-16'>
            <div className='md:flex md:items-center md:gap-12'>
                <a className='block' href='#'>
                    <img className='h-[34px] w-auto' src='/logo.png' alt='logo' />
                </a>
            </div>
            <div className='hidden md:block'>
                <ul className='flex flex-row justify-center items-start gap-16 text-[#7780A1]'>
                    <li>
                        <a href='#'>
                            Auctions
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Roadmap
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Discover
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Community
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-row justify-end items-center gap-4'>
                <div className='hidden sm:gap-4 sm:flex'>
                    <a className='px-5 py-2.5 text-sm font font-medium text-white border-2 rounded-xl' href='#'>
                        Contact
                    </a>
                </div>
                <div className='flex'>
                    <a className='px-5 py-2.5 text-sm font font-medium text-white border-2 rounded-xl' href='#'>
                        My Account
                    </a>
                </div>
            </div>
        </div>
    </section>
 )
}



export default Navbar