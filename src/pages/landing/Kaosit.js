import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Kaos from '../../components/Kaos.js'
import axios from 'axios';

function Kaosit() {
    const [itos, setItos] = useState([]);
    const [itbehavior, setBehavior] = useState([]);
    useEffect(() => {
        axios.get(`https://namira-api.vercel.app/api/itos`)
            .then((result) => {
                setItos(result.data.data);
            });
        axios.get(`https://namira-api.vercel.app/api/itbehavior`)
            .then((result) => {
                setBehavior(result.data.data);
            });
    }, []);
    const listBV = itbehavior.map((product, index) =>
        <Kaos key={index} title={product} />
    );
    const listOS = itos.map((product, index) =>
        <Kaos key={index} title={product} />
    );
    return (
        <div className="bg-slate-100 py-4 relative">
            <header className="max-w-sm mx-auto fixed top-0 right-0 left-0 z-10">
                <div className="container mx-auto bg-slate-900 mb-4 text-red-500 shadow-md">
                    <div className="flex py-2">
                        {/* eslint-disable-next-line */}
                        <marquee marquee="true" className="font-medium">PROMO!! Harga Rp89.000 untuk semua produk sampai 15 November 2022</marquee>
                    </div>
                </div>
            </header>
            <section className="max-w-sm mx-auto mt-10 mb-3 shadow-sm">
                <div className="container">
                    <div className="bg-white p-4">
                        <OwlCarousel className='owl-theme' loop margin={10} items={1}>
                            <div className='item'>
                                <img src="./images/cover.jpg" alt="Cover" className="w-auto" />
                            </div>
                            <div className='item'>
                                <img src="./images/cover.jpg" alt="Cover" className="w-auto" />
                            </div>
                        </OwlCarousel>
                        <p className="mb-2">Untuk melengkapi rutinitasmu, kami hadirkan kaos untukmu yang bikin kamu <b>Percaya Diri sebagai
                            anak IT</b>.</p>
                        <p className='mb-4'><b>Kaos yang nyaman dipakai</b> sehari-hari saat bekerja ataupun nongkrong bareng temen.</p>
                        <a href="https://wa.me/message/3R7BNUESRSINI1" target="_blank" rel="noreferrer" className="bg-green-600 block text-center text-white w-full py-2 rounded-lg font-medium mb-4"><i className="fab fa-whatsapp mr-1"></i>
                            Pesan sekarang!</a>
                    </div>
                </div>
            </section>
            <section className="max-w-sm mx-auto mt-3">
                <div className="container mx-auto">
                    <div className="bg-white pt-2">
                        <h5 className='font-bold text-center'>Kaos OS (Operating System)</h5>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {listOS}
                    </div>
                </div>
            </section>
            <section className="max-w-sm mx-auto mt-2">
                <div className="container">
                    <div className="p-4">
                        <a href="https://wa.me/message/3R7BNUESRSINI1" target="_blank" rel="noreferrer" className="bg-green-600 block text-center text-white w-full py-2 rounded-lg font-medium"><i className="fab fa-whatsapp mr-1"></i>
                            Pesan sekarang!</a>
                    </div>
                </div>
            </section>  
            <section className="max-w-sm mx-auto mt-3">
                <div className="container mx-auto">
                    <div className="bg-white pt-2">
                        <h5 className='font-bold text-center'>Programmer Life</h5>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {listBV}
                    </div>
                </div>
            </section>
            <section className="max-w-sm mx-auto mt-2">
                <div className="container">
                    <div className="p-4">
                        <a href="https://wa.me/message/3R7BNUESRSINI1" target="_blank" rel="noreferrer" className="bg-green-600 block text-center text-white w-full py-2 rounded-lg font-medium"><i className="fab fa-whatsapp mr-1"></i>
                            Pesan sekarang!</a>
                    </div>
                </div>
            </section>
            <section className="max-w-sm mx-auto mt-3 shadow-sm">
                <div className="container bg-white p-4">
                    <h5>Spesifikasi:</h5>
                    <img src="./images/spesifikasi.jpg" alt="Spesifikasi" className="my-3" />
                    <div>
                        <ul className="space-y-2">
                            <li>✅ Aktivitas hari-harimu akan <b>Nyaman</b> dan <b>Adem/Sejuk</b> dengan bahan kaos ini (Cotton Combed 30s)</li>
                            <li>✅ <b>Tidak gampang robek</b>, jahitan kuat menggunakan alat jahit modern</li>
                            <li>✅ Sablon <b>tajam/detail dimata</b>. Tidak mudah retak-retak dan bisa di setrika</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="max-w-sm mx-auto mt-3 shadow-sm">
                <div className="container bg-white p-4">
                    <h5 className="text-2xl text-center font-bold underline">SPESIAL PROMO!!!</h5>
                    <div className="text-center mt-3">
                        <h5 className="line-through text-slate-500">Rp100.000</h5>
                        <h1 className="text-2xl font-bold text-red-500">Rp89.000</h1>
                        <p className="my-3">Sebelum <b>harga naik</b>, PESAN SEKARANG!!!</p>
                        <a href="https://wa.me/message/3R7BNUESRSINI1" target="_blank" rel='noreferrer' className="bg-green-600 block text-center text-white w-full py-2 rounded-lg font-medium"><i className="fab fa-whatsapp mr-1"></i>
                            Pesan sekarang!</a>
                        <p className="mt-3 text-slate-700 text-[11px]">*Note: Bila <b>kaos tidak sesuai</b> (cacat), <b>ganti baru</b> atau <b>100% UANG KEMBALI</b> tanpa syarat apapun.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-sm mx-auto mt-3">
                <div className="container bg-slate-100 p-4">
                    <div>
                        <ul className="space-y-2">
                            <li><i className="far fa-check-circle"></i> Pembayaran bisa <b>COD</b> bayar di rumah (Transaksi <b>Aman dan Mudah</b>)</li>
                            <li><i className="far fa-check-circle"></i> Diproduksi oleh <b>Tim Ahli Konveksi</b> sudah berpengalaman bertahun-tahun</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="fixed bottom-2 right-2">
                <a href="https://wa.me/message/3R7BNUESRSINI1" target="_blank" rel="noreferrer"><lottie-player src="https://assets4.lottiefiles.com/packages/lf20_riycdgbe.json" background="transparent" speed="1" style={{ width: '90px', height: '90px' }} loop autoplay></lottie-player></a>
            </div>
            <footer className="mt-7">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-sm text-slate-700">Kaos Informatika by anada.store</p>
                        <p className="text-sm text-slate-700">© Copyright 2022. All right reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Kaosit