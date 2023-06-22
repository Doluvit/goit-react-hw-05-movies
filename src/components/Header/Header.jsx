import { NavLink } from 'react-router-dom';
import { Nav } from './Header.styled';

export const Header = () => {
  return (
    <div>
      <nav>
        <Nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </Nav>
      </nav>
    </div>
  );
};
