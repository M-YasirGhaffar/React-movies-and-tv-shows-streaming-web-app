import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoviesWrapper = ({ movies, isLoading}) => {
  const navigate = useNavigate();

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (isLoading) {
    return <div className="text-center font-bold">Loading...</div>;
  }

  return (
    <div className="container mx-auto m-1">
      <div className="flex flex-wrap justify-center  p-1">
        {movies.map(movie => (
          <div onClick={() => {
            handleClick(movie.id)
          }} key={movie.id} className="p-1 m-2 rounded-md transition duration-300 ease-in-out hover:transform hover:-translate-y-1" style={{ minWidth: '200px', maxWidth: 'calc(15% - 1rem)' }}>
            <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center">{movie.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MoviesWrapper;