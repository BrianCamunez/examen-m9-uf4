"use client";

import { useState, useEffect } from 'react';

const Detalle = (id) => {

    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=136aae622f8134553ea4b37ab8f6422d&language=es-ES`);
                if (!response.ok) {
                    throw new Error('Error al obtener la película');
                }
                const data = await response.json();
                setPelicula(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        if (id.id) {
            fetchPelicula();
        }
    },[id.id]);

    if (!pelicula) {
        return <div className="text-white">Cargando detalles de la película...</div>;
    }


    return (
        <div className="text-white">
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path
}`} alt="Imgen de la pelicula seleccionada"  width={"1200px"} height={"200px"}/>
            <h2 className='py-3'>{pelicula.title}</h2>
            <div className="flex gap-3">
                <div className="border-1 border-gray-600 p-2 rounded-[10px]">Añadir a favoritos</div>
                <div className="bg-white text-black p-2 rounded-[10px]">Ver Trailer</div>
            </div>
            <h2 className='py-3'>Sinopsis</h2>
            <p>{pelicula.overview}</p>
            <h2 className='py-3'>Genero</h2>
            <div className="flex gap-2">
                {pelicula.genres.map((genero) => (
                    <div key={genero.id} className="bg-blue-950 p-2 rounded-[10px]">
                        <h3>{genero.name}</h3>
                    </div>
                ))}
            </div>
            <div className="flex gap-2 mt-4 justify-evenly">
                <div className=" p-2 rounded-[10px]">
                    <h3>Fecha de estreno</h3>
                    <p>{pelicula.release_date}</p>
                </div>
                <div className=" p-2 rounded-[10px]">
                    <h3>Duración</h3>
                    <p>{pelicula.runtime} minutos</p>
                </div>
                
            </div>
            <h2 className='py-3'>Reparto</h2>
            <div className="grid grid-cols-4 gap-4">
               

            </div>
        </div>
    );
}

export default Detalle;