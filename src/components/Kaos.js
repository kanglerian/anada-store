import React, { useState } from 'react'

function Kaos(props) {
    const [cover, setCover] = useState(props.title.photo[0]);
    const listPhoto = props.title.photo.map((photo, index) => {
        return(
            <img key={index} src={photo} alt='anu' onClick={() => setCover(photo)} className="object-scale-down w-20 h-20" />
        )
    });
    return (
        <div className="bg-white w-50 p-3 text-center shadow-sm">
            <img src={cover} alt="Kaos" className="w-auto h-auto" />
            <div className='flex justify-around mt-1'>
                {listPhoto}
            </div>
            <div className="py-3">
                <h5 className="bg-slate-200 w-24 rounded-lg mx-auto font-medium">{props.title.code}</h5>
                <h5 className="text-md font-bold text-slate-700 mt-1">{props.title.name}</h5>
                {props.title.diskon > 0 && 
                    <h5 className="text-md line-through text-slate-600 my-1">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 4 }).format(props.title.price)}</h5>
                }
                <div className="bg-red-500 w-32 py-1 mt-1 mx-auto rounded-lg text-white">
                    <h5 className="font-bold text-xl">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 4 }).format(props.title.diskon > 0 ? props.title.diskon : props.title.price)}</h5>
                </div>
            </div>
        </div>
    )
}

export default Kaos