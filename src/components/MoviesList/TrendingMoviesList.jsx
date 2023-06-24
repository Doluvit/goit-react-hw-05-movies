import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

import { getMovies } from 'servises/getMovies';
import {
  MovieTittle,
  MovieListHeader,
  MovieList,
} from './TrendingMoviesList.styled';

export const MoviesList = () => {
  const [collection, setCollection] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await getMovies();

        setCollection(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
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
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <MovieTittle>{title}</MovieTittle>
              </Link>
            </li>
          );
        })}
        {loading && <Loader />}
      </MovieList>
    </>
  );
};
