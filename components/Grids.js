import { ClockIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";

const Grids = () => {
  return (
    <section className="w-3/4 mt-20 mb-12 border-t-[1px] border-[#262840]">
      <div className="flex w-full flex-col text-center mb-10 mt-[100px]">
        <span className="font-InterSans uppercase mb-4 text-[15px] leading-[18px] tracking-[3px] font-semibold text-gray-500">
          Overline
        </span>
        <h4 className="text-3xl text-white">Most popular live auctions</h4>
      </div>
      <div className="justify-center grid grid-cols-2 md:grid-cols-4 gap-4 text-[#7780A1]">
        <a className="border-2 rounded-lg p-1 border-[#262840]">Architecture</a>
        <a className="border-2 rounded-lg p-1 border-[#7780A1]">Photography</a>
        <a className="border-2 rounded-lg p-1 border-[#262840]">Games</a>
        <a className="border-2 rounded-lg p-1 border-[#262840]">Music</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center mt-20 gap-6">
        <div>
          <img src="column-images/image.svg" className="rounded-[20px]" />
          <p className="text-white mt-4">
            Faucibus habitasse at et platea massa mauris
          </p>
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-white mt-4" />
            <p className="text-white mt-4">22:59</p>
            <p className="text-white bg-purple-600 rounded-[4px] p-1 ml-[55px] mt-4">
              2.55 ETH
            </p>
          </div>
          <div className="flex flex-row items-center border-t-[1px] border-[#262840] mt-4 ">
            <p className="text-[#7780A1] text-[14px] mt-3">
              101 people are bidding
            </p>
            <HeartIcon className="h-5 w-5 text-[#7780A1] ml-9 mt-3" />
          </div>
        </div>
        <div>
          <img src="column-images/image2.svg" className="rounded-[20px]" />
          <p className="text-white mt-4">
            Diam purus sagittis nisl erat mauris
          </p>
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-white mt-4" />
            <p className="text-white mt-4">22:59</p>
            <p className="text-white bg-purple-600 rounded-[4px] p-1 ml-[55px] mt-4">
              2.55 ETH
            </p>
          </div>
          <div className="flex flex-row items-center border-t-[1px] border-[#262840] mt-4 ">
            <p className="text-[#7780A1] text-[14px] mt-3">
              101 people are bidding
            </p>
            <HeartIcon className="h-5 w-5 text-[#7780A1] ml-9 mt-3" />
          </div>
        </div>
        <div>
          <img src="column-images/image3.svg" className="rounded-[20px]" />
          <p className="text-white mt-4">
            Nascetur mauris viverra vel id id sem leo
          </p>
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-white mt-4" />
            <p className="text-white mt-4">22:59</p>
            <p className="text-white bg-purple-600 rounded-[4px] p-1 ml-[55px] mt-4">
              2.55 ETH
            </p>
          </div>
          <div className="flex flex-row items-center border-t-[1px] border-[#262840] mt-4 ">
            <p className="text-[#7780A1] text-[14px] mt-3">
              101 people are bidding
            </p>
            <HeartIcon className="h-5 w-5 text-[#7780A1] ml-9 mt-3" />
          </div>
        </div>
        <div>
          <img src="column-images/image4.svg" className="rounded-[20px]" />
          <p className="text-white mt-4">
            Velit, fusce id non dui amet amet maecenas
          </p>
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-white mt-4" />
            <p className="text-white mt-4">22:59</p>
            <p className="text-white bg-purple-600 rounded-[4px] p-1 ml-[55px] mt-4">
              2.55 ETH
            </p>
          </div>
          <div className="flex flex-row items-center border-t-[1px] border-[#262840] mt-4 ">
            <p className="text-[#7780A1] text-[14px] mt-3">
              101 people are bidding
            </p>
            <HeartIcon className="h-5 w-5 text-[#a18977] ml-9 mt-3" />
          </div>
        </div>
        <div>
          <img src="column-images/image5.svg" className="rounded-[20px]" />
          <p className="text-white mt-4">
            Tellus duis neque fringilla pulvinar gravida
          </p>
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-white mt-4" />
            <p className="text-white mt-4">22:59</p>
            <p className="text-white bg-purple-600 rounded-[4px] p-1 ml-[55px] mt-4">
              2.55 ETH
            </p>
          </div>
          <div className="flex flex-row items-center border-t-[1px] border-[#262840] mt-4 ">
            <p className="text-[#7780A1] text-[14px] mt-3">
              101 people are bidding
            </p>
            <HeartIcon className="h-5 w-5 text-[#de2114] fill-[#de2114] ml-9 mt-3" />
          </div>
        </div>
        <div>
          <img src="column-images/image6.svg" className="rounded-[20px]" />
          <p className="text-white mt-4">
            Odio lacus neque ultrices purus eget
          </p>
          <div className="flex flex-row gap-2 items-center">
            <ClockIcon className="h-5 w-5 text-white mt-4" />
            <p className="text-white mt-4">22:59</p>
            <p className="text-white bg-purple-600 rounded-[4px] p-1 ml-[55px] mt-4">
              2.55 ETH
            </p>
          </div>
          <div className="flex flex-row items-center border-t-[1px] border-[#262840] mt-4 ">
            <p className="text-[#7780A1] text-[14px] mt-3">
              101 people are bidding
            </p>
            <HeartIcon className="h-5 w-5 text-[#7780A1] ml-9 mt-3" />
          </div>
        </div>
      </div>
      <div className="mt-[72px] text-center">
        <a className="border-2 border-[#262840] p-4 rounded-xl">
          <span className="text-[#7780A1]">Show me more</span>
        </a>
      </div>
    </section>
  );
};

export default Grids;
