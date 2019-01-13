import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { useTransition, animated } from 'react-spring/hooks';
import { ContextOne } from 'context/ContextOne';

const items = [
  { name: 'Travis'},
  { name: 'Jon'},
  { name: 'Kihwan'},
  { name: 'Sean'},
  { name: 'Grace'},
  { name: 'Lambros'},
  { name: 'Reggie'},
  { name: 'Dave'},
  { name: 'Dayne'},
  { name: 'Nick'},
  { name: 'Terry'},
  { name: 'General'},
];

const ProfileContainer = ({ history }) => {
  let { state, dispatch } = useContext(ContextOne);
  const transitions = useTransition({
    items,
    keys: item => item.name,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 150
  });
  const setStaffCompliment = (name) => {
    dispatch({
      type: "SET_STAFF",
      payload: name
    });
    localStorage.setItem('staffName', name);
    history.push('/appraisal');
  };

  return (
    <div className="staff">
      { transitions.map(({ item, key, props }, index) => {
        return (
          <animated.div
            key={index}
            style={props}
            className="staff__names"
            onClick={() => setStaffCompliment(item.name)}
          >
            {item.name}
          </animated.div>
          )
       })
      }
    </div>
  )
};

export default withRouter(ProfileContainer);
