import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Auctions from '../components/Auctions/Auctions'
import Banner from '../components/Banner'
import Listbanner from '../components/Listbanner'
import BannerLeft from '../components/BannerLeft'
import Grids from '../components/Grids'

const Home: NextPage = () => {
  return (
    <div className='bg-[#060714] bg-[top_center]' style={{backgroundImage: `url('background.svg')`}}>
      <Navbar/>
      <Hero/>
      <Auctions/>
      <Banner/>
      <Listbanner/>
      <BannerLeft/>
      <Grids/>
    </div>
  )
}

export default Home
