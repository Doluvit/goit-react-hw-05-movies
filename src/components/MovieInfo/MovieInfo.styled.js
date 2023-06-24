import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Section = styled.section`
padding: 0 40px;
`

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  margin-bottom: 15px;
  color: #3f31b5;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
  }
`;

export const FilmContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const GenresContainer = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled.p`
  font-size: 28px;
  font-weight: 700;

`;

export const AddInfoList = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;

`

export const AddInfoItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100px;
  margin-bottom: 15px;
  color: #3f31b5;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
  }
`;


export const HorizontalLine = styled.hr`
  border: 0;
  height: 2px;
  margin: 30px 0;
  background-image: linear-gradient(
    to right,
    #3f51b5 50%,
    #337ab7 50%,
    #337ab7 60%,
    #ff9100 60%,
    #ff9100 70%,
    #05b5e6 70%,
    #05b5e6 80%,
    #b448b8 80%,
    #b448b8 90%,
    #bfe2ff 90%,
    #bfe2ff 100%
  );
`;