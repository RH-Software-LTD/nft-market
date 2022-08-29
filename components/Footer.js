import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='w-3/4 my-10 lg:my-20 flex flex-col lg:flex-row justify-center'>
      <div className='border-[1px] flex flex-col gap-3 items-center lg:items-start justify-between border-[rgb(38,40,64)] box-border w-full lg:w-1/3 p-8'>
        <div>
          <img src='logo.png' className='' />
        </div>
        <div className='flex w-full flex-col xl:flex-row justify-between'>
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
      <div className='flex flex-col border-[1px] border-[rgb(38,40,64)] gap-6 lg:gap-0 justify-between box-border w-full lg:w-1/3 p-8'>
        <div className='flex flex-col space-y-3 items-center lg:items-start'>
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
          <button type="button" className="text-white mt-6 h-14 w-36 bg-gradient-to-br from-purple-600 to-blue-500 focus:outline-none rounded-lg text-lg font-semibold px-5 py-2.5 text-center mr-2 mb-2">
            My Account
          </button>
        </div>

        <div id='social-icons' className='flex justify-center lg:justify-start w-full mt-4 gap-6 flex flex-row'>
          <AiFillFacebook className='text-[#7780A1] h-6 w-6' />
          <AiFillLinkedin className='text-[#7780A1] h-6 w-6' />
          <AiFillGithub className='text-[#7780A1] h-6 w-6' />
          <AiFillTwitterSquare className='text-[#7780A1] h-6 w-6' />
          <AiFillInstagram className='text-[#7780A1] h-6 w-6' />
        </div>
      </div>
      <div className='border-[1px] flex flex-col justify-between border-[rgb(38,40,64)] box-border w-full lg:w-1/3 p-6 flex flex-col gap-9 lg:gap-0  items-center lg:items-start'>
        <p className='text-[#7780A1] text-lg'>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
        <div className='flex w-full justify-center items-center'>
          <form className="flex w-full justify-between p-4 bg-white rounded-2xl focus:outline-none">
            <input type="search" id="search" className=" text-md lg:text-xl text-[#7780A1] focus:outline-none w-2/3" placeholder="Newsletter" required />
            <button type="submit" className="w-1/3 text-[#2A27C9] font-semibold rounded-lg text-md lg:text-lg text-right whitespace-nowrap">Sign in</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Footer