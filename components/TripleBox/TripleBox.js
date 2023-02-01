import LeftBox from "./LeftBox/LeftBox";
import RightBox from "./RightBox/RightBox";

const TripleBox = () => {
  return (
    <section className="w-3/4 mt-24 flex flex-col lg:flex-row gap-6 justify-center">
      <div className="w-full lg:w-1/3">
        <LeftBox />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col justify-end midBoxBackground border-[1px] border-gray-800 rounded-[24px]">
        <div className="h-4/5 w-full">
          <img src="midBox.svg" />
        </div>
        <div className="mx-4 h-1/5 flex flex-col">
          <p className="text-white text-xl">
            Get started creating <br /> selling your NFTs
          </p>
          <p className="font-InterSans text-md leading-[150%] text-gray-500 pt-2 pb-2">
            Nunc gravida faucibus netus feugiat <br /> tellus, viverra massa
            feugiat. Mi est sit.
          </p>
          <a className="text-white m-2 text-center text-md rounded-[4px] purple-button  p-2">
            Get started
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <RightBox />
      </div>
    </section>
  );
};

export default TripleBox;
