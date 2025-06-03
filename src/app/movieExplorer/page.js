"use client";

import { useState } from 'react';
import Detalle from "../components/Detalle";
import Peliculas from "../components/Peliculas";

const MovieExplorer = () => {

    const [idPelicula, setIdPelicula] = useState()

    function onPeliculaSeleccionada(id) {
        setIdPelicula(id);
        console.log("Pelicula seleccionada:", id);
    }

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold py-4">Movie Explorer</h1>
            <div className="w-[40%] mb-4 flex">
                <div className="w-[50%] bg-blue-950 p-2 text-center rounded-[10px]">
                    <h2>Populares</h2>
                </div>
                <div className="w-[50%] bg-blue-700 p-2 text-center rounded-[10px]">
                    <h2>Favoritas</h2>
                </div>
            </div>
            <div className=' flex'>
                <div className='w-[40%]'>
                    <Peliculas pasarId={onPeliculaSeleccionada}/>
                    

                </div>
                <div className='w-[60%]'>
                    <Detalle id={idPelicula}/>
                </div>
            </div>
        </div>
    )
}

export default MovieExplorer;