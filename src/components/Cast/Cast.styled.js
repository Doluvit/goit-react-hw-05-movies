import styled from 'styled-components';

export const CastContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const CastItem = styled.li`
width: 200px;
  height: 500px;
  overflow: hidden;
`;
export const CastPhoto = styled.img`
  display: block;
  width: 200px;
`;
export const CastTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
export const CastCharacter = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const NoCast = styled.p`
  font-size: 22px;
  font-weight: 500;
`;