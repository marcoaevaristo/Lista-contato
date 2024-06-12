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

interface ContactListProps { 
  filter: string; 
}

const ContactList: React.FC<ContactListProps> = ({ filter }) => {
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.email.toLowerCase().includes(filter.toLowerCase()) ||
    contact.phone.includes(filter)
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;

