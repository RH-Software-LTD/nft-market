import CarouselSales from "./CarouselSales"

const LeftBox = () => {
    return (
        <div className='flex flex-col h-full justify-start border-[1px] border-gray-800 rounded-[24px] overflow-hidden'>
            <p className="text-white pl-8 pr-24 py-8 font-semibold text-[32px] tracking-[0.2px]">
                Check out the <br /> hottest Sale offers
            </p>
            <CarouselSales />
            <a className='w-1/10 text-white m-8 text-center rounded-[4px] border-[1px] text-[#7780A1] border-gray-800 p-3 left-4'>
                Show me more
            </a>

        </div>
    )
}

export default LeftBox