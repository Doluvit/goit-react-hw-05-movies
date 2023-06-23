import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './RequestMoviesList.styled';
import { getMovieByName } from 'servises/getMovies';
import {
  MovieLink,
  MovieList,
  MovieTittle,
} from 'components/MoviesList/TrendingMoviesList.styled';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const RequestMoviesList = () => {
  const [filmRequest, setfilmRequest] = useSearchParams();
  const [request, setRequest] = useState([]);
  const newRequest = filmRequest.get('newRequest') ?? '';
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        const response = await getMovieByName(newRequest);
        const data = response.results;
        setRequest(data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (newRequest !== '') fetchMoviesByName();
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
        {request.map(({ title, id }) => {
          return (
            <MovieLink key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <MovieTittle>{title}</MovieTittle>
              </Link>
            </MovieLink>
          );
        })}
       {loading && <Loader isLoading={loading} />}
      </MovieList>
    </>
  );
};

export default RequestMoviesList;
