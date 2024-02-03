import React, { useState } from 'react';
import PopularMovies from './PopularMovies';
import PopularTVShows from './PopularTVShows';
import TrendingMovies from './TrendingMovies';
import TrendingTVShows from './TrendingTVShows';
import TopRatedMovies from './TopRatedMovies';
import TopRatedTVShows from './TopRatedTvShows';
import AllTrendingMoviesAndTvShows from './AllTrendingMoviesAndTvShows';

const Dashboard = () => {
  const [popularToggle, setPopularToggle] = useState('movie');
  const [trendingToggle, setTrendingToggle] = useState('movie');
  const [topRatedToggle, setTopRatedToggle] = useState('movie');

  return (
    <div>
      <AllTrendingMoviesAndTvShows />

      <div className="mb-8">
        <h1 className="movies-wrapper-title inline-block text-2xl md:text-3xl lg:text-4xl font-bold hover:-translate-y-1 w-fit transition duration-300 ease-in-out m-4 p-4 ml-32">Popular</h1>
        <div className="inline-block mb-4">
          <button
            className={`mr-2 px-4 py-2 font-bold rounded-md text-white ${popularToggle === 'movie' ? 'bg-cyan-600' : 'bg-gray-400'}`}
            onClick={() => setPopularToggle('movie')}
          >
            Movies
          </button>
          <button
            className={` px-4 py-2 font-bold rounded-md text-white ${popularToggle === 'tv' ? 'bg-cyan-600 ' : 'bg-gray-400'}`}
            onClick={() => setPopularToggle('tv')}
          >
            TV
          </button>
        </div>
        {popularToggle === 'movie' ? <PopularMovies /> : <PopularTVShows />}
      </div>

      <div className="mb-8">
      <h1 className="movies-wrapper-title inline-block text-2xl md:text-3xl lg:text-4xl 
      font-bold hover:-translate-y-1 w-fit transition 
      duration-300 ease-in-out m-4 p-4 ml-32">Trending</h1>
        <div className="inline-block mb-4">
          <button
            className={`mr-2 px-4 py-2 font-bold rounded-md text-white  ${trendingToggle === 'movie' ? 'bg-cyan-600' : 'bg-gray-400'}`}
            onClick={() => setTrendingToggle('movie')}
          >
            Movies
          </button>
          <button
            className={` px-4 py-2 font-bold rounded-md text-white  ${trendingToggle === 'tv' ? 'bg-cyan-600' : 'bg-gray-400'}`}
            onClick={() => setTrendingToggle('tv')}
          >
            TV
          </button>
        </div>
        {trendingToggle === 'movie' ? <TrendingMovies /> : <TrendingTVShows />}
      </div>

      <div className="mb-8">
      <h1 className="movies-wrapper-title inline-block text-2xl md:text-3xl lg:text-4xl 
      font-bold hover:-translate-y-1 w-fit transition 
      duration-300 ease-in-out m-4 p-4 ml-32">Top Rated</h1>
        <div className="inline-block mb-4">
          <button
            className={`mr-2 px-4 py-2 font-bold rounded-md text-white ${topRatedToggle === 'movie' ? 'bg-cyan-600' : 'bg-gray-400'}`}
            onClick={() => setTopRatedToggle('movie')}
          >
            Movies
          </button>
          <button
            className={` px-4 py-2 font-bold rounded-md text-white ${topRatedToggle === 'tv' ? 'bg-cyan-600' : 'bg-gray-400'}`}
            onClick={() => setTopRatedToggle('tv')}
          >
            TV
          </button>
        </div>
        {topRatedToggle === 'movie' ? <TopRatedMovies /> : <TopRatedTVShows />}
      </div>
    </div>
  );
};

export default Dashboard;