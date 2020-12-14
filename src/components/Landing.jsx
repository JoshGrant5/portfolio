import { useState } from 'react';
import { animated } from 'react-spring';
import cropped4 from '../img/cropped4.jpg';

export default function Landing(props) {

  const animatePage = ()=> {
    props.setView(true)
    // setTimeout(() => {
    //   props.setPage('BIO');
    // }, 500);
  };

  
  

  return (
    <div>
      <animated.aside id='sidebar' style={props.showSideBar}></animated.aside>

      <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article>

      <button class="bttn-stretch bttn-md bttn-success" onClick={() => animatePage()} onmouseover={() => props.setView(true)} onmouseout={() => props.setView(false)}>View</button>

      <img src={cropped4} alt='profile-pic' id='profile-pic' />
   
    </div>
  );
};