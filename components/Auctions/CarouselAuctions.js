import AuctionCard from './AuctionCard'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const styles = {
    cardContainer: 'hover:cursor-pointer mx-3 border-[1px] border-gray-800 rounded-[24px] flex-none order-0 flex-grow-0',
}

const CarouselAuctions = () => {
    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            focusOnSelect={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={false}
            centerMode={false}
            transitionDuration={100}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass={styles.cardContainer}
        >
            <AuctionCard headerText='Tristique diam a, enim, eros tellus. Viverra etiam'
                imgUrl='live-auctions/auctions-order-0.svg'
                price='1.23 ETH'
                timeOut='1:40 min left'
                bids='56 people are bidding'
                fav='541' />
            <AuctionCard headerText='Vulputate felis purus viverra morbi facilisi eget'
                imgUrl='live-auctions/auctions-order-1.svg'
                price='0.87 ETH'
                timeOut='2:49 min left'
                bids='24 people are bidding'
                fav='123' />
            <AuctionCard headerText='Dui accumsan leo vestibulum ornare eu'
                imgUrl='live-auctions/auctions-order-2.svg' 
                price='2.55 ETH' 
                timeOut='3:21 min left' 
                bids='35 people are bidding' 
                fav='78' />
            <AuctionCard headerText='Senectus adipiscing nascetur accumsan etiam'
                imgUrl='live-auctions/auctions-order-3.svg' 
                price='0.82 ETH' 
                timeOut='2:41 min left' 
                bids='67 people are bidding' 
                fav='265' />
            <AuctionCard headerText='Mattis at diam lorem nisl nam sed sociis'
                imgUrl='live-auctions/auctions-order-4.svg' 
                price='3.89 ETH' 
                timeOut='0:47 min left' 
                bids='32 people are bidding' 
                fav='123' />
        </Carousel>
    );
};

export default CarouselAuctions