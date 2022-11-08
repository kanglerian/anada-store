import React, { useState } from 'react'

function Kaosit() {
    const [cover, setCover] = useState('kaos-hitam.jpg');
    return (
        <div className="bg-gradient-to-bl from-slate-300 via-slate-50 to-slate-400 py-4 relative">
            <header className="max-w-sm mx-auto fixed top-0 right-0 left-0">
                <div className="container mx-auto bg-slate-900 ring ring-slate-200 mb-4 text-red-500 shadow-md">
                    <div className="flex py-2">
                        {/* eslint-disable-next-line */}
                        <marquee className="font-medium" marquee>PROMO!! Harga Rp89.000 untuk semua produk sampai 15 November 2022</marquee>
                    </div>
                </div>
            </header>
            <section id="recommendation" className="max-w-sm px-4 mx-auto mt-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="bg-white w-50 p-3 text-center shadow-sm rounded-xl">
                            <img src={'./images/' + cover} alt="Kaos" className="w-auto h-auto rounded-xl" />
                            <div className="flex justify-around mt-2">
                                <img src="./images/kaos-hitam.jpg" onClick={() => setCover('kaos-hitam.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                                <img src="./images/kaos-putih.jpg" onClick={() => setCover('kaos-putih.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                                <img src="./images/kaos-biru.jpg" onClick={() => setCover('kaos-biru.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                                <img src="./images/kaos-merah.jpg" onClick={() => setCover('kaos-merah.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                            </div>
                            <div className="bg-slate-100 py-2 rounded-lg mt-3">
                                <h5 className="text-md font-light text-slate-600">T-Shirt Kaos Linux Penguin Murah</h5>
                                <h5 className="text-md line-through text-slate-600">Rp100.000</h5>
                                <div className="bg-red-500 w-32 mx-auto rounded-lg text-white">
                                    <h5 className="font-bold text-xl">Rp89.000</h5>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-50 p-3 text-center shadow-sm rounded-xl">
                            <img src={'./images/' + cover} alt="Kaos" className="w-auto h-auto rounded-xl" />
                            <div className="flex justify-around mt-2">
                                <img src="./images/kaos-hitam.jpg" onClick={() => setCover('kaos-hitam.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                                <img src="./images/kaos-putih.jpg" onClick={() => setCover('kaos-putih.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                                <img src="./images/kaos-biru.jpg" onClick={() => setCover('kaos-biru.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                                <img src="./images/kaos-merah.jpg" onClick={() => setCover('kaos-merah.jpg')} alt="Kaos" className="w-auto h-16 md:h-16 rounded-lg" />
                            </div>
                            <div className="bg-slate-100 py-2 rounded-lg mt-3">
                                <h5 className="text-md font-light text-slate-600">T-Shirt Kaos Linux Penguin Murah</h5>
                                <h5 className="text-md line-through text-slate-600">Rp100.000</h5>
                                <div className="bg-red-500 w-32 mx-auto rounded-lg text-white">
                                    <h5 className="font-bold text-xl">Rp89.000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fixed bottom-10 right-5">
                <div className="text-center mt-4">
                    <a href="https://wa.me/message/3R7BNUESRSINI1" target="_blank" rel="noreferrer"
                        className="bg-green-600 text-white inline-block font-medium px-5 py-3 rounded-xl shadow-sm hover:bg-green-700 active:bg-green-800 focus:ring focus:ring-green-300"><i
                            className="fab fa-whatsapp mr-1"></i> Beli sekarang!</a>
                </div>
            </section>
            <footer className="mt-12">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-sm text-slate-700">Kaos IT Tasikmalaya by Anada Store</p>
                        <p className="text-sm text-slate-700">© Copyright 2022. All right reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Kaosit