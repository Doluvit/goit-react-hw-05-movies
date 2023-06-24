import routes from 'servises/routes';
import { Nav, Container, NavLink } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <nav>
        <Nav>
          <li>
            <NavLink to={routes.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.MOVIES}>Movies</NavLink>
          </li>
        </Nav>
      </nav>
    </Container>
  );
};
