import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

interface ContactItemProps {
  contact: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #ff4d4f;
  color: white;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = () => {
    const newName = prompt('Novo nome:', contact.name);
    const newEmail = prompt('Novo email:', contact.email);
    const newPhone = prompt('Novo telefone:', contact.phone);
    if (newName && newEmail && newPhone) {
      dispatch(editContact({ ...contact, name: newName, email: newEmail, phone: newPhone }));
    }
  };

  return (
    <Item>
      <div>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <Button onClick={handleEdit}>Editar</Button>
        <Button onClick={handleRemove}>Remover</Button>
      </div>
    </Item>
  );
};

export default ContactItem;
