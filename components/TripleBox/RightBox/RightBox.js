import { ClockIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import SaleCard from '../RightBox/SaleCard'

const RightBox = () => {
    return (
        <div className='flex flex-col justify-center items-center border-[1px] border-gray-800 rounded-[24px] overflow-hidden h-full'>
            <p className="text-white pl-8 pr-24 py-8 font-semibold text-[32px] tracking-[0.2px]">
                Top NFT at a lower price
            </p>
            <div className="w-4/5">

                <SaleCard headerText='Tristique diam a, enim, eros tellus. Viverra etiam'
                    imgUrl='live-auctions/auctions-order-0-mini.svg'
                    price='1.23 ETH'
                    timeOut='1:40'
                    bids='56 people are bidding'
                     />
                <SaleCard headerText='Vulputate felis purus viverra morbi facilisi eget'
                    imgUrl='live-auctions/auctions-order-1-mini.svg'
                    price='0.87 ETH'
                    timeOut='2:49'
                    bids='24 people are bidding'
                     />
                <SaleCard headerText='Dui accumsan leo vestibulum ornare eu'
                    imgUrl='live-auctions/auctions-order-2-mini.svg'
                    price='2.55 ETH'
                    timeOut='3:21'
                    bids='35 people are bidding'
                    />
                <SaleCard headerText='Senectus adipiscing nascetur accumsan etiam'
                    imgUrl='live-auctions/auctions-order-3-mini.svg'
                    price='0.82 ETH'
                    timeOut='2:41'
                    bids='67 people are bidding'
                     />




            </div>
            <a className='text-white m-8 text-center rounded-[4px] border-[1px] text-[#7780A1] border-gray-800 p-3 left-4'>
                Show me more
            </a>

        </div>
    )
}

export default RightBox
