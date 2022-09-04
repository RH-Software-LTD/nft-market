import LeftBox from './LeftBox/LeftBox'
import RightBox from './RightBox/RightBox'

const TripleBox = () => {
  return (
    <section className='w-3/4 mt-24 flex flex-col lg:flex-row gap-6 justify-center'>

      <div className='w-full lg:w-1/3'>
        <LeftBox />
      </div>
      <div className='w-full lg:w-1/3 flex flex-col relative w-full justify-end bg-no-repeat bg-cover' style={{ backgroundImage: `url('midBox.svg')` }}>
        <div className="absolute top-[-50px]">
          <img src='HandOfGod.png' alt='HandOfGod' />
        </div>
        <div className='ml-8'>
          <p className='text-white'>
            Get started creating <br /> selling your NFTs
          </p>

          <p className='font-InterSans text-sm leading-[150%] text-gray-500 pt-2'>
            Nunc gravida faucibus netus feugiat <br /> tellus, viverra massa feugiat. Mi est sit.
          </p>

        </div>

        <a className='text-white m-8 text-center rounded-[4px] purple-button  p-3 left-4'>
          Get started
        </a>
      </div>
      <div className='w-full lg:w-1/3 h-full'>
        <RightBox />
      </div>
    </section>
  )
}

export default TripleBox