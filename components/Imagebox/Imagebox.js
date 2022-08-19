import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop2XL: {
        breakpoint: { max: 2000, min: 1700 },
        items: 16,
        slidesToSlide: 1 // optional, default to 1.
    },
    desktopXL: {
        breakpoint: { max: 1700, min: 1440 },
        items: 13,
        slidesToSlide: 1 // optional, default to 1.
    },
    desktop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 9,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 7,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 768, min: 425 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobileSmall: {
        breakpoint: { max: 425, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const styles = {
    cardContainer: 'flex w-full gap-3 hover:cursor-pointer',
    imagebox: 'flex flex-col items-center justify-center',
    image: 'rounded-3xl',
    text: 'text-base mt-2 text-center text-[#7780A1]',

}

const Imagebox = () => {
    return (
        <section className='mt-28 mb-12 flex w-full'>
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
                centerMode={true}
                transitionDuration={100}
                containerClass={styles.cardContainer}
                removeArrowOnDeviceType={["desktopXL","desktop2XL","desktop", "tablet", "mobile"]}
                itemClass={styles.imagebox}
            >
                <div>
                    <img className={styles.image} src='carousel-images/image.svg' />
                    <p className={styles.text}>1.51 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_1.svg' />
                    <p className={styles.text}>2.18 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_2.svg' />
                    <p className={styles.text}>3.26 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_3.svg' />
                    <p className={styles.text}>0.78 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_4.svg' />
                    <p className={styles.text}>2.12 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_5.svg' />
                    <p className={styles.text}>3.78 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_6.svg' />
                    <p className={styles.text}>4.01 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_7.svg' />
                    <p className={styles.text}>3.12 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_8.svg' />
                    <p className={styles.text}>7.89 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_9.svg' />
                    <p className={styles.text}>2.21 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_10.svg' />
                    <p className={styles.text}>0.67 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_11.svg' />
                    <p className={styles.text}>3.34 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_12.svg' />
                    <p className={styles.text}>1.32 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_13.svg' />
                    <p className={styles.text}>4.69 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_14.svg' />
                    <p className={styles.text}>1.22 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_15.svg' />
                    <p className={styles.text}>3.42ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_16.svg' />
                    <p className={styles.text}>7.83 ETH</p>
                </div>
                <div>
                    <img className={styles.image} src='carousel-images/image_17.svg' />
                    <p className={styles.text}>6.41 ETH</p>
                </div>
            </Carousel>


        </section >
    )
}

export default Imagebox