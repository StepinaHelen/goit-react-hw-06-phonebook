import React from 'react';
import styles from './ContactList.module.css';
import ListItem from '../ListItem';
import { connect } from 'react-redux';
import contactsActions from '../../redux/Contacts/contacts-actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      <ListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedContact = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContact),
  );
};
const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
