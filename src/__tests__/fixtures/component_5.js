import React from 'react';

const Button = ({ children, onClick, style = {} }) => (
  <button
    style={{ }}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  // describes children
  children: React.PropTypes.string.isRequired,
  // describes onClick
  onClick: React.PropTypes.func,
  style: React.PropTypes.object, // describes style
};

export default Button;
