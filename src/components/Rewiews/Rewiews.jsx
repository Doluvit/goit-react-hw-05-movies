import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/getMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviewsById() {
      try {
        const response = await getMovieReviews(Number(movieId));
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviewsById();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
