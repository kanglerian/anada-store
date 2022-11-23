import React from 'react'

const Header = () => {
    const toggleMenu = () => {
        const navMenu = document.querySelector('#nav-menu');
        navMenu.classList.toggle('hidden');
    }
    return (
        <header className='bg-slate-900 fixed top-0 left-0 w-full flex items-center z-10 py-4'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between relative'>
                    <div className='px-4'>
                        {/* <img src='../../../icons/favicon.svg' alt='Anada Store' className='w-16' /> */}
                        <a href='/' className='text-white text-2xl font-bold'>Anada Store</a>
                    </div>
                    <div className='flex items-center px-4'>
                        <button className='lg:hidden bg-slate-100 px-4 py-1 rounded text-slate-600' onClick={toggleMenu}>
                            <i class="fa-solid fa-bars fa-1x"></i>
                        </button>
                        <nav id='nav-menu' className='lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none hidden absolute py-1 bg-slate-900 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full'>
                            <ul className='block lg:flex space-y-2 lg:space-y-0 py-3 lg:py-0 px-3'>
                                <li className='group'>
                                    <a href='/kaos' className='text-base text-white rounded-md py-2 mx-3'>Kaos</a>
                                </li>
                                <li className='group'>
                                    <a href='#home' className='text-base text-white rounded-md py-2 mx-3'>Undangan Pernikahan</a>
                                </li>
                                <li className='group'>
                                    <a href='#home' className='text-base text-white rounded-md py-2 mx-3'>Souvenir Pernikahan</a>
                                </li>
                            </ul>
                        </nav>
                        <button className='text-base text-white rounded-md py-2 mx-3 ml-4'><i class="fa-solid fa-cart-shopping"></i></button>
                        <button className='text-base text-white rounded-md py-2 mx-3'><i class="fa-solid fa-user"></i></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header