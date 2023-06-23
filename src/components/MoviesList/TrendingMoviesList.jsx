import { Link, useLocation } from 'react-router-dom';
import {
  MovieLink,
  MovieTittle,
  MovieListHeader,
  MovieList,
} from './TrendingMoviesList.styled';
import { useEffect, useState } from 'react';
import { getMovies } from 'servises/getMovies';

export const MoviesList = () => {
  const [collection, setCollection] = useState([]);
  const location = useLocation();


  useEffect(() => {
    async function fetchMovies() {
      const response = await getMovies();

      setCollection(response.results);
    }
    fetchMovies();
  }, []);

 return (
    <>
      <MovieListHeader>Trending today</MovieListHeader>
      <MovieList>
        {collection.map(({ title, id }) => {
          if (!title) {
            return null;
          }

          return (
            <MovieLink key={id}>
              <Link to={`movies/${id}`} state={{from: location}}>
                <MovieTittle>{title}</MovieTittle>
              </Link>
            </MovieLink>
          );
        })}
      </MovieList>
    </>
  );
};
