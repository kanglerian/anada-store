import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Store = () => {

    const toggleMenu = () => {
        const navMenu = document.querySelector('#nav-menu');
        navMenu.classList.toggle('hidden');
    }
    const options = {
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            },
            768: {
                items: 4
            },
            1024: {
                items: 5
            }
        }
    }
    return (
        <div>
            <header className='bg-transparent top-0 left-0 w-full flex items-center z-10 mt-2'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between relative'>
                        <div className='px-4'>
                            <img src='../../../icons/favicon.svg' className='w-16' />
                        </div>
                        <div className='flex items-center px-4'>
                            <button className='lg:hidden bg-slate-100 px-4 py-1 rounded text-slate-600' onClick={toggleMenu}>
                                <i class="fa-solid fa-bars fa-1x"></i>
                            </button>
                            <nav id='nav-menu' className='lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none hidden absolute py-3 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full'>
                                <ul className='block lg:flex'>
                                    <li className='group'>
                                        <a href='#home' className='block items-center text-base text-dark bg-slate-100 group-hover:bg-slate-200 px-5 mb-2 rounded-md py-2 mx-3 flex'><i class="fa-solid fa-shirt mr-1"></i><span>Kaos</span></a>
                                    </li>
                                    <li className='group'>
                                        <a href='#home' className='block items-center text-base text-dark bg-slate-100 group-hover:bg-slate-200 px-5 mb-2 rounded-md py-2 mx-3 flex'><i class="fa-solid fa-file-invoice mr-1"></i><span>Undangan</span></a>
                                    </li>
                                    <li className='group'>
                                        <a href='#home' className='block items-center text-base text-dark bg-slate-100 group-hover:bg-slate-200 px-5 mb-2 rounded-md py-2 mx-3 flex'><i class="fa-solid fa-bowl-food mr-1"></i><span>Makanan</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section className='mt-3 mb-5 px-4'>
                <div className='container mx-auto'>
                    {/* <img src='../../../images/banner.jpg' className='w-full rounded-lg' /> */}
                    <div className='bg-slate-400 w-full rounded-lg h-[400px]'></div>
                </div>
            </section>
            <section className='my-10 px-4'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap items-center'>
                        <div className='basis-full lg:basis-1/2'>
                            <iframe className='w-full aspect-video mb-3 rounded-lg' src="https://www.youtube.com/embed/12TuC1sUXxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='basis-full lg:basis-1/2 lg:px-4'>
                            <h5 className='text-2xl font-bold mb-2'>Video Pengemasan Produk</h5>
                            <p className='mb-3 text-slate-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a href='#' className='bg-red-600 px-4 py-2 rounded-lg text-white'>lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className='my-10 px-4'>
                <div className='container mx-auto'>
                    <div className='text-center'>
                        <h5 className='text-2xl font-bold text-slate-800'>Kaos Informatika</h5>
                        <p className='text-slate-600'>Tunjukin eksistensi kamu sebagai anak IT dengan kaos ekslusif kaos informatika.</p>
                        <div className='mt-4 mb-5'>
                            <OwlCarousel className='owl-theme' loop margin={10} responsive={options.responsive}>
                                <div className='item'>
                                    <img src="../../../images/iklan.jpg" alt="Cover" className="w-72 shadow-lg" />
                                </div>
                                <div className='item'>
                                    <img src="../../../images/iklan.jpg" alt="Cover" className="w-72 shadow-lg" />
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className='text-center'>
                            <a href='#' className='bg-red-600 px-4 py-2 rounded-lg text-white'>lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='my-3'>
                <div className='container mx-auto'>
                    <p className='text-center text-sm text-slate-400'>Copyright © 2022 Anada Store.</p>
                </div>
            </footer>
        </div>
    )
}

export default Store