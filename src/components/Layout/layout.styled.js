import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 400; 
  

  display: inline-flex;
  padding: 16px;
  text-decoration: none;
  list-style: none;
  

  &.active {
    color: tomato;
  }

  :focus,
  :hover {
    color: blue;
  }
`;

export const Nav = styled.nav `
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`