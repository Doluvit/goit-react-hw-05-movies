import { Link } from 'react-router-dom';

export const MoviesList = ({ collection }) => {
  return (
    <>
      Trending today
      <ul>
        {collection.map(({ title, id }) => {
          if (!title) {
            return null;
          }
          return (
            <li key={id}>
              <Link to={`${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
