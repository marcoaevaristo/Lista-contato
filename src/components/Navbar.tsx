import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #007bff;
  color: white;
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/contacts" style={{ color: 'white', textDecoration: 'none' }}>Contatos</Link>
    </Nav>
  );
};

export default Navbar;
