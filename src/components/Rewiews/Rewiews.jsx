import { NoCast } from 'components/Cast/Cast.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/getMovies';
import {
  ReviewAuthor,
  ReviewContainer,
  ReviewContent,
  ReviewItem,
} from './Rewiews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [noReviews, setNoReviews] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviewsById() {
      try {
        setLoading(true);
        const response = await getMovieReviews(Number(movieId));

        if (!response.length) {
          setNoReviews(`Unfortunately, there are no reviews!`);
        }
        setReviews(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchReviewsById();
  }, [movieId]);

  return (
    <ReviewContainer>
      {!reviews.length && <NoCast>{noReviews}</NoCast>}

      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewItem key={id}>
            <ReviewAuthor>Author: {author}</ReviewAuthor>
            <ReviewContent>{content}</ReviewContent>
          </ReviewItem>
        );
      })}
      {loading && <Loader />}
    </ReviewContainer>
  );
};

export default Reviews;
