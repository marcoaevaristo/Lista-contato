import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

interface ContactFilterProps {
  setFilter: (filter: string) => void;
}

const ContactFilter: React.FC<ContactFilterProps> = ({ setFilter }) => {
  return (
    <Input
      type="text"
      placeholder="Buscar contatos..."
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default ContactFilter;
