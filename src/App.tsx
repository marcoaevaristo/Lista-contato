import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactsPage from './pages/ContactsPage';
import GlobalStyle from './GlobalStyles';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

