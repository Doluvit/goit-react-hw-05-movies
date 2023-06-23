import { Nav, Container, NavLink } from './Header.styled';

export const Header = () => {
  return (
    <Container>
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
    </Container>
  );
};
