import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from './store/actions';
import { Container, ContainerActions, Button } from './styled';

class PollingJoke extends Component {
  componentDidMount() {
    // const { getJoke } = this.props;
    // getJoke();
  }

  handlePlay = () => {
    const { getJoke } = this.props;
    getJoke();
  };

  handlePause = () => {
    const { stopPolling } = this.props;
    stopPolling();
  };

  render() {
    const { joke } = this.props;

    return (
      <Container>
        <h1>Jokes - (Polling)</h1>
        <p>{joke}</p>
        <ContainerActions>
          <Button onClick={this.handlePlay}>Play</Button>
          <Button onClick={this.handlePause}>Pause</Button>
        </ContainerActions>
        <Link to="/">Home</Link>
      </Container>
    );
  }
}

PollingJoke.propTypes = {
  getJoke: PropTypes.func.isRequired,
  stopPolling: PropTypes.func.isRequired,
  joke: PropTypes.string.isRequired
};

const mapProps = ({ polling }) => polling;

export default connect(
  mapProps,
  actions
)(PollingJoke);
