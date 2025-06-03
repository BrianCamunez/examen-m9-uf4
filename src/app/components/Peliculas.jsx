import { useState, useEffect } from 'react';

const Peliculas = (idPelicula) => {


    const [peliculasFetch, setPeliculasFetch] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=136aae622f8134553ea4b37ab8f6422d&language=es-ES&page=1`)
                if (!response.ok) {
                    throw new Error('Error al obtener las películas');
                }
                const data = await response.json();

                setPeliculasFetch(data.results);

               
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }

        fetchPeliculas();

    }, []);

    return (
        <div className='grid grid-cols-3 gap-4'>
            {peliculasFetch.map((pelicula) => (
                <div key={pelicula.id} className=' border-1 p-1 text-white' onClick={() => idPelicula.pasarId(pelicula.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} className='w-full h-100 object-cover rounded-md mb-2' />
                    <h4 className='font-bold'>{pelicula.title}</h4>
                </div>
            ))}
        </div>
    );
}

export default Peliculas;