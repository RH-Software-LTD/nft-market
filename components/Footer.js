import React from 'react'
import {AiFillInstagram, AiFillFacebook,AiFillLinkedin, AiFillGithub, AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='mt-20 mb-20 flex flex-row justify-center'>
        <div className='border-[1px] border-[rgb(38,40,64)] box-border h-[350px] w-[465px] rounded-l-xl p-8'>
            <img src='logo.png' className='mb-[212px]' />
            <div className='flex flex-row gap-16'>
                <a className='text-base text-[#7780A1] text-center' href='#'>
                    Support
                </a>
                <a className='text-base text-[#7780A1] text-center' href='#'>
                    Term of service
                </a>
                <a className='text-base text-[#7780A1] text-center' href='#'>
                    License
                </a>
            </div>
        </div>
        <div className='border-[1px] border-[rgb(38,40,64)] box-border h-[350px] w-[465px] p-8'>
          <div className='flex flex-col space-y-3'>
            <a href='#' className='text-white text-lg font-semibold'>
              Auctions
            </a>
            <a href='#' className='text-white text-lg font-semibold'>
              Roadmap
            </a>
            <a href='#' className='text-white text-lg font-semibold'>
              Discover
            </a>
            <a href='#' className='text-white text-lg font-semibold'>
              Community
            </a>
          </div>
          <button type="button" className="text-white mt-6 h-14 w-36 bg-gradient-to-br from-purple-600 to-blue-500 focus:outline-none rounded-lg text-lg font-semibold px-5 py-2.5 text-center mr-2 mb-2">
            My Account
          </button>
          <div id='social-icons' className='mt-4 gap-6 flex flex-row'>
            <AiFillFacebook className='text-[#7780A1] h-6 w-6' />
            <AiFillLinkedin className='text-[#7780A1] h-6 w-6' />
            <AiFillGithub className='text-[#7780A1] h-6 w-6' />
            <AiFillTwitterSquare className='text-[#7780A1] h-6 w-6' />
            <AiFillInstagram className='text-[#7780A1] h-6 w-6' />
          </div>
        </div>
        <div className='border-[1px] border-[rgb(38,40,64)] box-border h-[350px] w-[465px] rounded-r-xl p-6 flex flex-col space-y-36'>
          <p className='text-[#7780A1] text-lg'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
          <form>   
            <div className="relative">
                <input type="search" id="search" className="block p-4 pl-10 w-full text-xl text-[#7780A1] focus:outline-none bg-white rounded-2xl" placeholder="Newsletter" required/>
                <button type="submit" className="text-[#2A27C9] absolute right-2.5 bottom-2.5 font-semibold rounded-lg text-lg px-4 py-2 ">Sign in</button>
            </div>
        </form>
        </div>
    </section>
  )
}

export default Footer