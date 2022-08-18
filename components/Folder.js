
const styles = {
    section: 'w-3/4 my-24',
    container: 'w-full flex flex-row bg-no-repeat bg-cover',
    info: 'flex flex-col w-full pt-32 pl-32 pb-20 w-1/2',
    h2: 'pt-4 pb-1 text-5xl md:text-5xl font-bold text-white tracking-tighter leading-tight',
    p: 'text-lg md:text-xl text-white font-medium'
}

const Folder = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container} style={{ backgroundImage: `url('folder.svg')` }}>


                <div className={styles.info}>
                    <span className='font-InterSans uppercase mb-4 text-[15px] leading-[18px] tracking-[3px] font-semibold text-gray-500'>
                        Overline
                    </span>
                    <h1 className='text-3xl lg:text-5xl mb-6 tracking-[0.2px] font-semibold text-white'>
                        Cursus vitae <br /> sollicitudin donec <br /> nascetur. Join now
                    </h1>
                    <p className='font-InterSans leading-[150%] text-[#7780A1] text-gray-500'>
                        Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.
                    </p>
                    <div className='text-white flex flex-row mt-12 gap-4 text-center items-center'>
                    <a className='text-white whitespace-nowrap w-1/5 rounded-xl bg-[#4745D0] p-3 shadow-lg purple-button' href='#'>
                        Get started
                    </a>
                    <a className='text-gray-600 whitespace-nowrap w-1/5 border-gray-500 border-[1px] p-3 rounded-xl border-opacity-30' href='#'>
                        Learn more
                    </a>
                </div>

                </div>

                <div className={styles.info} style={{ backgroundImage: `url('Users.svg')` }}>
                </div>
            </div>
        </section>
    )
}

export default Folder