import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/getMovies';
import CastServisePicture from '../../servises/CastServisePicture.png';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCastById() {
      try {
        const response = await getMovieCast(Number(movieId));
        setCastInfo(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCastById();
  }, [movieId]);
  return (
    <ul>
      {castInfo.map(({ id, profile_path, original_name, character }) => {
        if (profile_path) {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        } else {
          return (
            <li key={id}>
              <img src={CastServisePicture} alt={original_name} width={300} />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Cast;
