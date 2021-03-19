import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import contactsActions from '../../redux/Contacts/contacts-actions';

const Filter = ({ filter, onHandleInputSearch }) => {
  return (
    <div className={styles.findContact}>
      <h2>Contacts</h2>
      <label className={styles.findContactLabel}>
        Find contacts by name
        <input
          className={styles.findContactInput}
          name="filter"
          type="text"
          value={filter}
          onChange={onHandleInputSearch}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  onHandleInputSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onHandleInputSearch: e =>
    dispatch(contactsActions.filterContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
