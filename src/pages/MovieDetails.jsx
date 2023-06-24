import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import { getMovieById } from 'servises/getMovies';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
   const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setLoading(true)
        const response = await getMovieById(Number(movieId));
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    fetchMovieById();
  }, [movieId]);


 return (
   <>
     {movieInfo && <MovieInfo movieInfo={movieInfo} location={location} />}
     {loading && <Loader />}
   </>
 );
};

export default MovieDetails;
