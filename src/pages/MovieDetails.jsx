import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'servises/getMovies';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchMovieById() {
      try {
        const response = await getMovieById(id);
       
        setMovieInfo({...response});
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieById();
  }, [id]);
  
  console.log(movieInfo)
  return (
    <div>
      <button>Go back</button>
      {movieInfo.poster_path && (
        <img src={movieInfo.poster_path} alt={movieInfo.title} />
      )}
      {movieInfo.original_title && <p>{movieInfo.original_title}</p>}
    </div>
  );
};

export default MovieDetails;
