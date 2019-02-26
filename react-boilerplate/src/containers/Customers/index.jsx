import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from './store/actions';
import { Spinner } from 'components';
import { Container } from './styled';

class Customers extends Component {
  componentDidMount() {
    const { getCustomers } = this.props;
    getCustomers();
  }

  renderUser = (user) => {
    const { name, login, picture } = user;
    return (
      <li key={login.uuid}>
        <img src={picture.thumbnail} alt={user.name.first} />
        <p>{`${name.title} ${name.first} ${name.last}`}</p>
      </li>
    );
  };

  render() {
    const { customers, loaders } = this.props;

    return (
      <Container>
        <div>
          <h1>CUSTOMERS:</h1>
          <Spinner show={loaders.customersList} />
          <ul>
            {customers.length > 0 &&
              !loaders.customersList &&
              customers.map((user) => this.renderUser(user))}
          </ul>
          <Link to="/">Home</Link>
        </div>
      </Container>
    );
  }
}

Customers.propTypes = {
  loaders: PropTypes.object.isRequired,
  getCustomers: PropTypes.func.isRequired,
  customers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

const mapProps = ({ customers }) => customers;

export default connect(
  mapProps,
  actions
)(Customers);
