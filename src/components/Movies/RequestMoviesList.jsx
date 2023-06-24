import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { getMovieByName } from 'servises/getMovies';

import {
  ErrorMessage,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './RequestMoviesList.styled';
import {
  MovieList,
  MovieTittle,
} from 'components/MoviesList/TrendingMoviesList.styled';

const RequestMoviesList = () => {
  const [request, setRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [filmRequest, setfilmRequest] = useSearchParams();
  const newRequest = filmRequest.get('newRequest') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        setLoading(true);
        const response = await getMovieByName(newRequest);
        const data = response.results;

        setRequest(data);
         setHasFetchedData(true);
      } catch (error) {
        toast.error('Sorry, no films found on your request!');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (newRequest !== '') {
      fetchMoviesByName();
    }
  }, [newRequest]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const requestData = form.elements.name.value;
    if (requestData.trim() === '') {
      toast.error('Please, input your request!');
      return;
    }
    setfilmRequest({ newRequest: requestData });
     setHasFetchedData(false);
    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search..."
          name="name"
        />
      </SearchForm>
      <MovieList>
        {!hasFetchedData && loading && <Loader />}
        {hasFetchedData && request.length === 0 && (
          <ErrorMessage>No films found on your request!</ErrorMessage>
        )}
        {hasFetchedData &&
          request.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  <MovieTittle>{title}</MovieTittle>
                </Link>
              </li>
            );
          })}
        {loading && <Loader />}
      </MovieList>
    </>
  );
};

export default RequestMoviesList;
