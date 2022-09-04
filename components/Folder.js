
const styles = {
    section: 'w-3/4 my-24',
    background: 'w-full flex relative flex-row bg-no-repeat folder-background',
    container: 'w-full flex flex-row p-12',
    pleat: 'bg-no-repeat max-w-[40%]',
    info: 'flex flex-col w-full md:w-1/2',
    image: 'hidden md:flex w-1/2 bg-no-repeat',
    h2: 'pt-4 pb-1 text-5xl md:text-5xl font-bold text-white tracking-tighter leading-tight',
    p: 'text-lg md:text-xl text-white font-medium'
}

const Folder = () => {
    return (
        <section className={styles.section}>
            <div className={styles.pleat}>
                <img src="Pleat.svg" alt="Pleat" />
            </div>
            <div className={styles.background}>

                <div className={styles.container}>

                    <div className={styles.info}>
                        <span className='text-sm font-InterSans uppercase mb-4 text-[15px] leading-[18px] tracking-[3px] font-semibold text-gray-500'>
                            Overline
                        </span>
                        <h1 className='text-sm mb-6 tracking-[0.2px] font-semibold text-white'>
                            Cursus vitae <br /> sollicitudin donec <br /> nascetur. Join now
                        </h1>
                        <p className='font-InterSans leading-[150%] text-[#7780A1] text-gray-500'>
                            Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.
                        </p>
                        <div className='text-white flex flex-row mt-12 w-full gap-4 text-center items-center'>
                            <a className='text-white whitespace-nowrap rounded-xl bg-[#4745D0] p-3 shadow-lg purple-button' href='#'>
                                Get started
                            </a>
                            <a className='text-gray-600 whitespace-nowrap  border-gray-500 border-[1px] p-3 rounded-xl border-opacity-30' href='#'>
                                Learn more
                            </a>
                        </div>
                    </div>

                    <div className={styles.image} style={{ backgroundImage: `url('Users.svg')` }}>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Folder