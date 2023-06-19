import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const options = new URLSearchParams({
// //   per_page: 12,
//   key: '485db8c64742926ad3904264dbc73b05',
// //   image_type: 'photo',
// //   orientation: 'horizontal',
// });

export const getMovies = async () => {
    //   const newSearchText = searchText.slice(String(Date.now()).length + 1);
    const response = await axios.get(
        `${BASE_URL}trending/all/day?api_key=485db8c64742926ad3904264dbc73b05`
    );
    const data = response.data;
    return data;
   
}
// export const Hello = () => {
// console.log('object')
// }

// Hello();