import { Link } from 'react-router-dom';
import { MovieLink, MovieTittle, MovieListHeader } from './MoviesList.styled';

export const MoviesList = ({ collection }) => {
  return (
    <>
      <MovieListHeader>Trending today</MovieListHeader>
      <ul>
        {collection.map(({ title, id }) => {
          if (!title) {
            return null;
          }

          return (
            <MovieLink key={id}>
              <Link to={`${id}`}>
                <MovieTittle>{title}</MovieTittle>
              </Link>
            </MovieLink>
          );
        })}
      </ul>
    </>
  );
};
