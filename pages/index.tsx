import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Header/Hero'
import Auctions from '../components/Header/Auctions'

const Home: NextPage = () => {
  return (
    <div className='bg-[#060714]'>
      <Navbar/>
      <Hero/>
      <Auctions/>
    </div>
  )
}

export default Home
