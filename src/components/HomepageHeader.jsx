import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring/hooks'

const HomepageHeader = ({ setToggle }) => {
  const ref = useRef([]);
  const [items, setItems]= useState([]);
  const transitions = useTransition({
    items,
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  });
  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    setToggle(false);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(['Station Five', 'Weekly', 'Appraisals']), 2000));
    ref.current.push(setTimeout(() => setItems(['Station Five', 'Appraisals']), 5000));
    ref.current.push(setTimeout(() => setItems(['Station Five', 'Weekly', 'Appraisals']), 8000));
    setTimeout(() => setToggle(true), 11000);
  }, []);

  useEffect(() => void reset(), [])
  return (
    <>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => {
        return (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        )
      })}
    </>
  );
};

export default HomepageHeader;
