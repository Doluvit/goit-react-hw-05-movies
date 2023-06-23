import { Link, useLocation } from 'react-router-dom';
import {
  MovieLink,
  MovieTittle,
  MovieListHeader,
  MovieList,
} from './TrendingMoviesList.styled';
import { useEffect, useState } from 'react';
import { getMovies } from 'servises/getMovies';
import { Loader } from 'components/Loader/Loader';

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
        console.log(error.message)
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
            <MovieLink key={id}>
              <Link to={`movies/${id}`} state={{from: location}}>
                <MovieTittle>{title}</MovieTittle>
              </Link>
            </MovieLink>
          );
        })}
         <Loader isLoading={loading} />
      </MovieList>
    </>
  );
};
