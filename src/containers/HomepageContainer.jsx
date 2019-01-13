import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomepageHeader from 'components/HomepageHeader';
import Button from 'components/Button';

const HomepageContainer = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="homePage">
      <HomepageHeader setToggle={setToggle} />
      { toggle &&
        <div className="homePage__container">
          <Link to="/staff" style={{textDecoration: 'none'}}>
            <Button buttonText={'Leave a compliment'} />
          </Link>
        </div>
      }
    </div>
  );
};

export default HomepageContainer;

// import { useTrail, animated } from 'react-spring/hooks';
// const items = ['hi there', 'wooohooo', 'yeahhh']
// const props = useTrail(items.length, { opacity: 1, from: { opacity: 0 } });
// props.map(({ opacity }, index) => {
//   return (
//     <animated.div key={index} style={{opacity}}>{items[index]}</animated.div>
//   )
// })
