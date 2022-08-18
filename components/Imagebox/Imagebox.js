import React from 'react'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}

const styles = {
    imagebox: 'flex flex-col',
    image: 'h-24 w-24 rounded-3xl',
    text: 'text-base mt-2 text-center text-[#7780A1]'

}

const Imagebox = () => {
  return (
    <section className='mt-28 mb-12'>
        <div className='flex flex-row gap-6'>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_2.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_4.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_6.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_8.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_10.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_12.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_14.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_16.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_18.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_20.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_22.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_24.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_26.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_28.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_30.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_32.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
            <div className={styles.imagebox}>
                <img className={styles.image} src='carousel-images/image_34.svg'/>
                <p className={styles.text}>1.51 ETH</p>
            </div>
        </div>
    </section>
  )
}

export default Imagebox