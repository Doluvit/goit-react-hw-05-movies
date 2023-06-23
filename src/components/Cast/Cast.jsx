import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/getMovies';
import CastServisePicture from '../../servises/CastServisePicture.png';
import {
  CastContainer,
  CastItem,
  CastPhoto,
  CastTitle,
  CastCharacter,
  NoCast
} from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  const [noCast, setNoCast] = useState('');

  useEffect(() => {
    async function fetchCastById() {
      try {
        const response = await getMovieCast(Number(movieId));

        if (!response.length) {
          setNoCast(`Unfortunately, the list of actors is not yet available!`);
        }
        setCastInfo(response.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCastById();
  }, [movieId]);

  return (
    <CastContainer>
      {!castInfo.length && <NoCast>{noCast}</NoCast>}

      {castInfo.map(({ id, profile_path, original_name, character }) => {
        if (profile_path) {
          return (
            <CastItem key={id}>
              <CastPhoto
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt={original_name}
              />
              <CastTitle>{original_name}</CastTitle>
              <CastCharacter>Character: {character}</CastCharacter>
            </CastItem>
          );
        } else {
          return (
            <CastItem key={id}>
              <CastPhoto src={CastServisePicture} alt={original_name} />
              <CastTitle>{original_name}</CastTitle>
              <CastCharacter>Character: {character}</CastCharacter>
            </CastItem>
          );
        }
      })}
    </CastContainer>
  );
};

export default Cast;
