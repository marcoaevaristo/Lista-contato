import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import ContactFilter from '../components/ContactFilter';

const ContactsPage: React.FC = () => {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactFilter setFilter={setFilter} />
      <ContactList filter={filter} />
    </div>
  );
};

export default ContactsPage;
