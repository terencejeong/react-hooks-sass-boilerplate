import React, { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { postCompliment } from 'api/server';
import Button from 'components/Button';
import Loader from 'components/Loading'


const AppraisalForm = ({ name, history }) => {
  const inputRef = useRef(null);
  const [ message, setMessage ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const submitForm = async () => {
    setLoading(true);
    const submitCompliment = await postCompliment(name, message);
    if (submitCompliment.success) {
      setLoading(false);
      history.push('/success');
    } else {
      setLoading(false);
      console.log(history)
    }
  };
  useEffect(() => {
    if (!loading) {
      inputRef.current.focus();
    }
    return () => {
      inputRef.current.remove();
    }
  }, []);

  return (
    <>
      {!loading ?
        <div className="form">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
          <Button buttonText={'Submit'} submit={submitForm} />
        </div>
        :
        <Loader />
      }
    </>
  )
};

export default withRouter(AppraisalForm);
