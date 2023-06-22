import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Suspense } from 'react';

const MovieInfo = ({ movieInfo }) => {
  const { title, vote_average, overview, poster_path, release_date, genres } =
    movieInfo;
  const location = useLocation();
  const buttonGoBack = location.state ?? '/';

  if (!genres) return;
  const genresList = genres.map(genre => (
    <li key={genre.id}>
      <p>{genre.name}</p>
    </li>
  ));
  return (
    <section style={{ padding: '0 40px' }}>
      <Link
        to={buttonGoBack}>
        <FaLongArrowAltLeft />
        Go back
      </Link>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {(vote_average * 10).toFixed()}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>{genresList}</ul>
          </div>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
     <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieInfo;
