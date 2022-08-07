import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Auctions from '../components/Auctions'
import Banner from '../components/Banner'
import Listbanner from '../components/Listbanner'

const Home: NextPage = () => {
  return (
    <div className='bg-[#060714]'>
      <Navbar/>
      <Hero/>
      <Auctions/>
      <Banner/>
      <Listbanner/>

    </div>
  )
}

export default Home
