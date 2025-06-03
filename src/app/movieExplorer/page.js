"use client";

import Peliculas from "../components/Peliculas";

const MovieExplorer = () => {

    return (
        <>
            <h1 className="text-white">Vista </h1>
            <div className='text-white flex'>
                <div className='w-[40%]'>
                    <Peliculas />
                </div>
                <div className='w-[60%]'>
                    <h1>Detalles de la Película</h1>
                    <p>Selecciona una película para ver sus detalles.</p>
                </div>
            </div>
        </>
    )
}

export default MovieExplorer;