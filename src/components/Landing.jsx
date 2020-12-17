import { useState, useRef, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'

export default function Landing() {

  const textColor = '#c9d3c9';
  const highlightColor =  'rgb(162, 216, 162)';
  const otherColor = 'rgb(40, 215, 159)';

  const ref = useRef([]);
  const [items, setItems] = useState([]);

  const transitions = useTransition(items, null, {
    // unique: true,
    // reset: true, 
    from: { opacity: 0.5, height: 50, innerHeight: 50, transform: 'rotateX(0deg)', color: textColor },
    enter: [
      { opacity: 1, height: 100, innerHeight: 100, color: otherColor }, { transform: 'rotateX(180deg)' },
      { transform: 'rotateX(0deg)', color: textColor }
    ],
    leave: { opacity: 0.5, height: 0, innerHeight: 0, ease: '0.5s' }
  })

  const swapOut = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    setItems([]);
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 2000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Baseball Lover', 'Full Stack Developer']), 4000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 6000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Fun Guy', 'Full Stack Developer']), 8000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 10000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Blueberry Addict', 'Full Stack Developer']), 12000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 14000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Canucks Diehard', 'Full Stack Developer']), 16000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 18000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Your Next Hire?', 'Full Stack Developer']), 20000));
    ref.current.push(setTimeout(() => setItems(['Josh Grant', 'Full Stack Developer']), 22000));
    setTimeout(() => colorFinal(), 23000);
  }, []);

  useEffect(() => swapOut(), []);

  const colorFinal = () => {
    Array.from(document.getElementsByClassName('heading-item')).forEach(item => {
      if (item.innerHTML === 'Full Stack Developer') {
        item.style.transition = 'color 3s';
        item.style.color = otherColor;
      }
    });
  }

  return (
    <div>
    <div id='heading'>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={swapOut}>
          <animated.div className='heading-item' style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
     {/* <button className="bttn-stretch bttn-md bttn-success" id='view-bttn' onClick={() => props.setPage('BIO')}>View Portfolio</button>  */}
    </div>
  );
};