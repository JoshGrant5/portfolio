import { useState, useRef, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import MediaIcons from './MediaIcons';


export default function Landing() {

  const textColor = '#c9d3c9';
  const highlightColor =  'rgb(162, 216, 162)';
  const otherColor = 'rgb(40, 215, 159)';

  // const ref = useRef([])
  // const [items, setItems] = useState([])
  // // const transitions = useTransition(items, null, {
  // //   // from: { opacity: 1, height: 100, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: highlightColor } ,
  // //   enter: [
  // //     { opacity: 1, height: 200, innerHeight: 200 },
  // //     { transform: 'perspective(600px) rotateX(180deg)', color: highlightColor },
  // //     { transform: 'perspective(0px) rotateX(0deg)' },
  // //   ],
  // //   leave: [{ color: textColor }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
  // //   update: { color: highlightColor , transition: 'ease 0.25s' },
  // // })

  // const transitions = useTransition(items, null, {
  //   from: { opactity: 0, color: textColor, height: 100, marginLeft: -100, marginRight: 0, marginTop: 50},
  //   enter: [
  //         { opacity: 1, height: 200, innerHeight: 200 },
  //         { transform: 'perspective(600px) rotateX(180deg)', color: highlightColor },
  //         { transform: 'perspective(0px) rotateX(0deg)' },
  //       ],
  //   leave: { opacity: 0 },
  //   update: [
  //     { transform: 'rotateX(180deg)', color: highlightColor },
      
  //     { transform: 'rotateX(0deg)' },
  //     { opacity: 0, height: 200, ease: '0.5s' }
  //   ]
  // });

  // const reset = useCallback(() => {
  //   ref.current.map(clearTimeout)
  //   ref.current = []
  //   setItems([])
  //   ref.current.push(setTimeout(() => setItems(['Full Stack Developer']), 2000))
  //   ref.current.push(setTimeout(() => setItems(['Baseball Lover', 'Full Stack Developer']), 4000))
  //   ref.current.push(setTimeout(() => setItems(['Canucks Diehard', 'Full Stack Developer']), 6000))
  //   ref.current.push(setTimeout(() => setItems(['Blueberry Addict', 'Full Stack Developer']), 80000))
  //   ref.current.push(setTimeout(() => setItems(['Full Stack Developer']), 10000))
  // }, [])

  // useEffect(() => reset(), [])

  // // const multiAnimation = useSpring({
  // //   from: { opacity: 0, color: 'red' },
  // //   to: [
  // //       { opacity: 1, color: '#ffaaee' },
  // //       { opacity: 1, color: 'red' },
  // //       { opacity: .5, color: '#008000' },
  // //       { opacity: .8, color: 'black' }
  // //   ]
  // // });

  const ref = useRef([])
  const [items, set] = useState([])

  const transitions = useTransition(items, null, {
    unique: true,
    reset: true, 
    from: { opacity: 0.5, height: 50, innerHeight: 50, transform: 'rotateX(0deg)', color: otherColor, ease: '0.5s' },
    enter: [
      { opacity: 1, height: 100, innerHeight: 100, ease:'1s' }
    ],
    leave: [{ innerHeight: 0 }, { opacity: 1, height: 0 }, { transform: 'rotateX(180deg)', color: textColor },
    { transform: 'rotateX(0deg)' },],
  //   update: { opacity: 1, color: textColor, height: 100, innerHeight: 100, ease:'0.5s'}
  })

  const [description, setDescription] = useState('Baseball Lover'); 
  const options = ['Baseball Lover', 'Canucks Diehard', 'Blueberry Addict'];
  let count = 0;

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Josh Grant', 'Full Stack Developer']), 1000))
    ref.current.push(setTimeout(() => set(['Josh Grant', description, 'Full Stack Developer']), 3000))
    ref.current.push(setTimeout(() => set(['Josh Grant', 'Full Stack Developer']), 5000));
  }, [description]);

  useEffect(() => reset(), [description]);

  const swap = () => {
    count = count > 2 ? 0 : count + 1;
    setDescription(options[count]);
  }

  return (
    <div>
      {/* <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article> */}

    {/* <animated.h1 style={multiAnimation}>This is a test</animated.h1> */}

    {/* <div id='heading'>
      <p>Josh Grant</p>
    
      {transitions.map(({ item, key, props }) => (
        <animated.div className="transitions-item" key={key} style={props} onClick={reset}>
          <animated.div>{item}</animated.div>
        </animated.div>
      ))}
    </div> */}

    <div id='heading'>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest} onClick={() => swap()}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
    
     {/* <button className="bttn-stretch bttn-md bttn-success" id='view-bttn' onClick={() => props.setPage('BIO')}>View Portfolio</button>  */}


      <MediaIcons />
    </div>
  );
};