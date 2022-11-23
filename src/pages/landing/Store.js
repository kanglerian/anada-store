import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from '../../components/Banner';

const Store = () => {
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
            <Header/>
            <Banner/>
            <section className='my-10 px-4'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <a href='#home' className="flex-auto lg:flex-1 bg-[url('../../../images/code.jpg')] bg-cover text-white rounded-lg flex justify-center items-center h-[100px]">
                            <h5>Kaos Informatika</h5>
                        </a>
                        <a href='#home' className="flex-auto lg:flex-1 bg-[url('../../../images/invite.jpg')] bg-cover text-white rounded-lg flex justify-center items-center h-[100px]">
                            <h5>Undangan Pernikahan</h5>
                        </a>
                        <a href='#home' className="flex-auto lg:flex-1 bg-[url('../../../images/wedding.jpg')] bg-cover text-white rounded-lg flex justify-center items-center h-[100px]">
                            <h5>Souvenir Pernikahan</h5>
                        </a>
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
                            <a href='#home' className='bg-red-600 px-4 py-2 rounded-lg text-white'>lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className='my-10 px-4'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap items-center'>
                        <div className='basis-full lg:basis-1/2'>
                            <iframe className='w-full aspect-video mb-3 rounded-lg' src="https://www.youtube.com/embed/12TuC1sUXxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='basis-full lg:basis-1/2 lg:px-4'>
                            <h5 className='text-2xl font-bold mb-2'>Video Pengemasan Produk</h5>
                            <p className='text-base mb-3 text-slate-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a href='#home' className='bg-red-600 px-4 py-2 rounded-lg text-white'>lihat selengkapnya</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Store