import React from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import GlobalStyle from './GlobalStyles';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </Container>
  );
};

export default App;
