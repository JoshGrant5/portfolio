import { useState, useRef, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import MediaIcons from './MediaIcons';
// import cropped4 from '../img/cropped4.jpg';
// import bw from '../img/bw.png';
// import color from '../img/color.png'

export default function Landing(props) {

  const textColor = '#c9d3c9';
  const highlightColor =  'rgb(162, 216, 162)';

  const ref = useRef([])
  const [items, setItems] = useState([])
  const transitions = useTransition(items, null, {
    // from: { opacity: 1, height: 100, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: highlightColor } ,
    enter: [
      { opacity: 1, height: 200, innerHeight: 200 },
      { transform: 'perspective(600px) rotateX(180deg)', color: highlightColor },
      { transform: 'perspective(0px) rotateX(0deg)' },
    ],
    leave: [{ color: textColor }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: highlightColor , transition: 'ease 0.25s' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    setItems([])
    ref.current.push(setTimeout(() => setItems(['Full Stack Developer']), 2000))
    ref.current.push(setTimeout(() => setItems(['Baseball Lover']), 4000))
    ref.current.push(setTimeout(() => setItems(['Canucks Diehard']), 6000))
    ref.current.push(setTimeout(() => setItems(['Blueberry Addict']), 80000))
    ref.current.push(setTimeout(() => setItems(['Full Stack Developer']), 10000))
  }, [])

  useEffect(() => void reset(), [])


  return (
    <div >
      {/* <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article> */}

    <div id='heading'>
      {/* <p>Josh Grant</p> */}
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
          <animated.div style={{ overflow: 'hidden', height: '500px' }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
    
     {/* <button className="bttn-stretch bttn-md bttn-success" id='view-bttn' onClick={() => props.setPage('BIO')}>View Portfolio</button>  */}

    

      <MediaIcons />
    </div>
  );
};