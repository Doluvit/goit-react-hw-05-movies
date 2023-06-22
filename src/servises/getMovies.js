import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=485db8c64742926ad3904264dbc73b05`
  );
  const data = response.data;

  return data;
};

export const getMovieById = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=485db8c64742926ad3904264dbc73b05`
  );
  const data = response.data;
  return data;
};

export const getMovieByName = async request => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${request}&api_key=485db8c64742926ad3904264dbc73b05`
  );
  const data = response.data;
  return data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=485db8c64742926ad3904264dbc73b05`
  );
  const data = response.data;
  return data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=485db8c64742926ad3904264dbc73b05`
  );
  const data = response.data;
  return data;
};

