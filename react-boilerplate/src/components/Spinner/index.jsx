import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledLoader } from './styled';

class Spinner extends Component {
  renderSpinner() {
    return (
      <StyledLoader>
        <div className="loading">
          <div className="spinner">
            <div className="mask">
              <div className="maskedCircle" />
            </div>
          </div>
        </div>
      </StyledLoader>
    );
  }

  render() {
    const { show } = this.props;
    return show ? this.renderSpinner() : null;
  }
}

Spinner.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Spinner;
