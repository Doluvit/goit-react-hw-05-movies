import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getMovies } from 'servises/getMovies';

const Home = () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await getMovies();
        setCollection(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <MoviesList collection={collection} />
    
  );
};

export default Home;
