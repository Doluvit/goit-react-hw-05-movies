import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ImSearch } from 'react-icons/im';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './RequestMoviesList.styled';
import { getMovieByName } from 'servises/getMovies';
import MovieDetails from 'pages/MovieDetails';
// import { toast } from 'react-toastify';

const RequestMoviesList = () => {
  const [filmRequest, setfilmRequest] = useSearchParams();
  const [request, setRequest] = useState([]);
  const newRequest = filmRequest.get('newRequest') ?? '';
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        setLoading(true);
        const response = await getMovieByName(newRequest);
        const data = response.results;
        setRequest(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (newRequest) fetchMoviesByName();
  }, [newRequest]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const requestData = form.elements.name.value;
    setfilmRequest({ newRequest: requestData });
    form.reset();
  };
console.log(request)
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
      <ul>
        {request.map(({ title, id }) => {
          return (
            <li key={id}>
              <MovieDetails movieId={id}>{title}</MovieDetails>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RequestMoviesList;
