import styled from 'styled-components';


export const MovieTittle = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #3f51b5;
  transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  :hover {
    color: #fff;
    box-shadow: inset 400px 0 0 0 #54b3d6;
  }
`;

export const MovieListHeader = styled.p`
  margin-left: 40px;
  font-size: 28px;
  font-weight: 700;
  color: #3f51b5;
`;

export const MovieList = styled.ul`
  padding-left: 40px;
`;
