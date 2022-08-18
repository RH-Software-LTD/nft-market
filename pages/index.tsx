import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Auctions from "../components/Auctions/Auctions";
import Banner from "../components/Banner";
import TripleBox from "../components/TripleBox/TripleBox";
import BannerLeft from "../components/BannerLeft";
import Grids from "../components/Grids";
import Stats from "../components/stats/Stats";
import Folder from "../components/Folder";

const Home: NextPage = () => {
  return (
    <div
      className="flex flex-col justify-center bg-no-repeat bg-[#060714] bg-[top_center]"
      style={{ backgroundImage: `url('background.svg')` }}
    >
      <Navbar />
      <Hero />
      <Auctions />
      <div className="flex flex-col items-center bg-[#060714] bg-[top_center]">
        <Banner />
        <TripleBox />
        <BannerLeft />  
        <Grids />
        <Stats/>
        <Folder />
      </div>
    </div>
  );
};

export default Home;
