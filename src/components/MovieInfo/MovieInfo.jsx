import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';


import {
  Section,
  LinkButton,
  FilmContainer,
  GenresContainer,
  AddInfo,
  AddInfoList,
  AddInfoItem,
  HorizontalLine,
} from './MovieInfo.styled';


const MovieInfo = ({ movieInfo }) => {
  const location = useLocation();
  const buttonGoBack = useRef(location.state?.from ?? '/');
   const { title, vote_average, overview, poster_path, release_date, genres } =
    movieInfo;

  if (!genres) return;
  const genresList = genres.map(genre => (
    <li key={genre.id}>
      <p>{genre.name}</p>
    </li>
  ));
  
  return (
    <Section>
      <LinkButton to={buttonGoBack.current}>
        <FaLongArrowAltLeft />
        Go back
      </LinkButton>

      <div>
        <FilmContainer>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {(vote_average * 10).toFixed()}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <GenresContainer>{genresList}</GenresContainer>
          </div>
        </FilmContainer>
      </div>
      <HorizontalLine />
      <div>
        <AddInfo>Additional information</AddInfo>
        <AddInfoList>
          <li>
            <AddInfoItem to="cast" state={{ from: location }}>
              Cast
            </AddInfoItem>
          </li>
          <li>
            <AddInfoItem to="reviews">Reviews</AddInfoItem>
          </li>
        </AddInfoList>
      </div>
      <HorizontalLine />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  movieInfo: PropTypes.object,
};