import { slide as Menu } from 'react-burger-menu'

var styles = {
    bmBurgerButton: {
        position: 'relative',
        width: '26px',
        height: '20px',
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#7780A1'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: '0'
    },
    bmMenu: {
        background: 'white',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#7780A1',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    bmItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0.25rem 0'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}
const Navbar = () => {
    return (
        <section className='max-w-screen px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-row items-center justify-between h-16'>
                <div className='w-1/2 sm:w-auto md:flex md:items-center'>
                    <a className='block' href='#'>
                        <img src='/logo.png' alt='logo' />
                    </a>
                </div>
                <div className='hidden w-2/5 lg:block'>
                    <ul className='flex flex-row justify-center items-center text-[#7780A1]'>
                        <li className="w-1/4">
                            <a href='#' className="text-md xl:text-base">
                                Auctions
                            </a>
                        </li>
                        <li className="w-1/4">
                            <a href='#' className="text-md xl:text-base">
                                Roadmap
                            </a>
                        </li>
                        <li className="w-1/4">
                            <a href='#' className="text-md xl:text-base">
                                Discover
                            </a>
                        </li>
                        <li className="w-1/4">
                            <a href='#' className="text-md xl:text-base">
                                Community
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex lg:hidden'>

                    <Menu styles={styles} width={320} right>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a className="menu-item--small" href="">Settings</a>

                        <div className='flex flex-row justify-center mt-6'>
                            <div className='w-1/2'>
                                <a className='px-8 py-2.5 text-xs font-medium text-[#7780A1] border-[1px] rounded-xl' href='#'>
                                    Contact
                                </a>
                            </div>
                            <div className='w-1/2'>
                                <a className='px-5 py-2.5 text-xs font-medium text-[#7780A1] border-[1px] rounded-xl' href='#'>
                                    My Account
                                </a>
                            </div>
                        </div>
                    </Menu>
                </div>

                <div className='hidden lg:flex flex-row justify-end items-center gap-4'>
                    <div className='hidden sm:gap-4 sm:flex'>
                        <a className='px-5 py-2.5 text-sm font-medium text-white border-[1px] rounded-xl' href='#'>
                            Contact
                        </a>
                    </div>
                    <div className='hidden sm:gap-4 sm:flex'>
                        <a className='px-5 py-2.5 text-sm font-medium text-white border-[1px] border-black rounded-xl purple-button' href='#'>
                            My Account
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}



export default Navbar