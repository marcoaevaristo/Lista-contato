import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../features/contacts/contactsSelectors';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactList: React.FC = () => {
  const contacts = useSelector(selectContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
