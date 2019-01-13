import React from 'react';

const Button = ({ buttonText, submit }) => (
  <button
    className="btn btn--stripe btn--large"
    type="submit"
    onClick={submit ? submit : null}
  >
    {buttonText}
  </button>
);

export default Button;
