import { useEffect } from 'react';

// The visual seen on load of the home page. Inspired by The Athletic and Uber mobile apps
export default function Transition(props) {

  useEffect(() => {
    setTimeout(() => {
      props.setPage('BIO');
    }, 2000);
  }, [props]);

  return (
    <div className='transition'>
      Josh Grant
    </div>
  );
;}