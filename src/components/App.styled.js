import styled from 'styled-components';

export const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  gap: 40px;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 40px;

  font-size: 30px;
  font-weight: 500;

  padding-right: 24px;
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
