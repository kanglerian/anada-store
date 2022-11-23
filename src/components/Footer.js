import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-7 pb-5 pt-8 bg-slate-900 text-white">
            <div className="container mx-auto">
                <div className='flex flex-wrap lg:flex-nowrap lg:justify-center gap-5'>
                    <div className='px-4 lg:basis-1/3'>
                        <h5 className='text-2xl font-bold'>Anada Store</h5>
                        <p className='text-sm text-slate-400 font-light mt-3 space-y-1'>Sebagai Pusat Fashion Online di Asia, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas jangkauan produk, mulai dari produk internasional hingga produk lokal dambaan. Kami menjadikan Anda sebagai pusatnya. Bersama ZALORA, You Own Now.</p>
                    </div>
                    <div className='px-4 lg:basis-1/3'>
                        <h5 className='text-2xl font-bold'>Payment Method</h5>
                        <div className='inline-block bg-white mt-3 rounded-lg p-3'>
                            <ul className='flex justify-center items-center gap-2'>
                                <li><img src='../../icons/gopay.png' alt='gopay' className='w-16'/></li>
                                <li><img src='../../icons/link.png' alt='gopay' className='w-9'/></li>
                                <li><img src='../../icons/ovo.png' alt='gopay' className='w-16'/></li>
                                <li><img src='../../icons/lummo.png' alt='gopay' className='w-16'/></li>
                                <li><img src='../../icons/bsi.png' alt='gopay' className='w-20'/></li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 lg:basis-1/3'>
                        <h5 className='text-2xl font-bold'>Contact Us</h5>
                        <ul className='text-sm text-slate-400 font-light space-y-1 mt-3'>
                            <li><i class="fa-solid fa-envelope"></i> E-mail: anadaprinting@gmail.com</li>
                            <li><i class="fa-solid fa-globe"></i> Website: https://anada.store/</li>
                            <li><i class="fa-brands fa-instagram"></i> Instagram: @anada.store</li>
                            <li><i class="fa-brands fa-facebook"></i> Facebook: Anada Store</li>
                            <li><i class="fa-brands fa-whatsapp"></i> Whatsapp: +62812 8650 1015</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-slate-400 mt-8">
                    <p className="text-xs">Anada Store | Kaos, Undangan Pernikahan, Souvenir Pernikahan</p>
                    <p className="text-xs">© Copyright 2022. All right reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer