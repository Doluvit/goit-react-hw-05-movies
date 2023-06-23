import styled from 'styled-components';
import { NavLink as NavTitle } from 'react-router-dom';

export const Container = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;

  min-height: 20px;

  font-size: 30px;
  font-weight: 500;

  padding-right: 24px;
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const NavLink = styled(NavTitle)`
  color: #fff;

  &.active {
    color: yellow;
  }
`;
