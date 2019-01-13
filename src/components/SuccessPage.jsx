import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const SuccessPage = () => {
  return (
    <div className="success">
      <h1 className="success__message">
        Thank you for posting, please come back on Friday to see the compliments.
      </h1>
      <Link to="/staff" style={{textDecoration: 'none'}}>
        <Button buttonText={'Leave another compliment'} />
      </Link>
    </div>
  )
};

export default SuccessPage;
