import styled from 'styled-components';
import { Link as PageLink } from 'react-router-dom';

export const MainForm = styled.div`
 background-color: #fff;
 min-height: 100vh;
  display: grid;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

export const PageMk = styled.p`
  color: #7152bf;
  font-size: 70px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;

export const Link = styled(PageLink)`
  min-width: 130px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #000000;
  background: #cad1de;
  padding: 14px 18px;
  border-radius: 4px;
  transition: 0.3s ease;

  :hover {
    background: #7152bf;
    color: #fff;
  }
`;