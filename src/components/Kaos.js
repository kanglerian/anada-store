import React, { useState } from 'react'

function Kaos(props) {
    const [cover, setCover] = useState(props.title.photo[0]);
    return (
        <div className="bg-white w-50 p-3 text-center shadow-sm">
            <img src={'./images/katalog/' + cover} alt="Kaos" className="w-auto h-auto" />
            <div className="flex justify-around mt-1">
                <img src="./images/kaos-hitam.jpg" alt='anu' onClick={() => setCover('kaos-hitam.jpg')} className="w-auto h-20" />
                <img src="./images/kaos-putih.jpg" alt='anu' onClick={() => setCover('kaos-putih.jpg')} className="w-auto h-20" />
                <img src="./images/kaos-biru.jpg" alt='anu' onClick={() => setCover('kaos-biru.jpg')} className="w-auto h-20" />
                <img src="./images/kaos-merah.jpg" alt='anu'onClick={() => setCover('kaos-merah.jpg')} className="w-auto h-20" />
            </div>
            <div className="py-3">
                <h5 className="text-md font-light text-slate-600">{props.title.name}</h5>
                <h5 className="text-md line-through text-slate-600 my-2">Rp100.000</h5>
                <div className="bg-red-500 w-32 py-1 mx-auto rounded-lg text-white">
                    <h5 className="font-bold text-xl">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 4 }).format(props.title.price)}</h5>
                </div>
            </div>
        </div>
    )
}

export default Kaos