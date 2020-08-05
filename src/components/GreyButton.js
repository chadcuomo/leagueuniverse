import React from 'react';
import PropTypes from 'prop-types';

const GreyButton = (props) => (
  <button className="grey-button">{props.buttonText}</button>
);

GreyButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default GreyButton;
