import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import Button from '../Button';
// import { connect } from 'react-redux';
// import contactsActions from '../../redux/Contacts/contacts-actions';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const valueInput = event.currentTarget.name;
    this.setState({ [valueInput]: event.currentTarget.value.trimLeft() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, addContact } = this.props;
    const { name, number } = this.state;

    const findName = contacts.find(findContact => {
      return findContact.name === name;
    });

    if (findName) {
      alert(`${name} is already in the contacts`);
      this.reset();
    } else {
      addContact(name, number);
      this.reset();
    }
  };
  reset = () => {
    this.setState({
      name: ' ',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              name="number"
              type="text"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
          <Button text="Add contact" type="submit" />
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   addContact: (name, number) =>
//     dispatch(contactsActions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
