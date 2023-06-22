import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'servises/getMovies';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  //  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  // const movie = data.find(item => item.id === Number(movieId));

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const response = await getMovieById(Number(movieId));
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return <>{movieInfo && <MovieInfo movieInfo={movieInfo} />}</>;
};

export default MovieDetails;
