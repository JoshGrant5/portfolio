import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import coding from '../img/coding.jpg';
import lighthouse from '../img/lighthouse.jpg';
import lumber from '../img/lumber.jpg';
import ottawa from '../img/ottawa.jpg';

import '../styles/about.scss';

export default function About(props) {

  return (
    //* Styles inspired by and modified off of design by Jeff Glen https://codepen.io/jeffglenn/pen/KNYoKa/
    <section id='about-tl'> 
      <div className='tl-item'>
        <div className='tl-bg' >
          <LazyLoadImage width='100%' height='100%' effect='blur' src={ottawa} alt='ottawa' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>Carleton University</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2013 - 2017</p>
          <p className='about-description'>Living in the Nation's Capital, I earned my Bachelor of Arts degree studying criminology at Carleton University. While I was never driven to pursue a career in that field post-graduation, I wouldn't change a thing about my undergrad. Ottawa holds a special place in my heart, and the Sens are the only hockey team other than the Canucks who I'll actively root for!</p>
        </div>
      </div>

      <div className='tl-item'>
      <div className='tl-bg' >
          <LazyLoadImage width='100%' height='100%' effect='blur' src={lumber} alt='lumber' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>Lumber Industry</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2017 - 2020</p> 
          <p className='about-description'>While attending Carleton, I spent my summers working at Dick's Lumber in North Vancouver. After graduating, they gave me an opportunity in contract sales. I'd spend the next 3 years in the lumber industry in sales, transitioning to commodity trading in late 2019 to work as a lumber trader for Boscus Canada. Throughout my time in the industry, I was fortunate enough to work with some amazing people who helped shape me into the professional I am today.</p>
        </div>
      </div>

      <div className='tl-item'>
        <div className='tl-bg' >
          <LazyLoadImage width='100%' height='100%' effect='blur' src={lighthouse} alt='lighthouse' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>Web Dev Bootcamp</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2020</p>
          <p className='about-description'>After years of thinking of coding through the lense of, "that's cool, I wonder if I'd be able to do that", I finally made the plunge. I dipped my toes in the water with an Udemy Python course, then completed the amazing HarvardX CS50, which made me fall in love with programming and dream of becoming a developer. Soon after finishing that course, I enrolled in Lighthouse Labs Web Development Bootcamp to make that dream a reality. 3 months of 12 to sometimes 14 hour days, and I loved every minute of it!</p>
        </div>
      </div>

      <div className='tl-item'>
       <div className='tl-bg' >
          <LazyLoadImage width='100%' height='100%' effect='blur' src={coding} alt='coding' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>Now The Fun Begins</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2021 & Beyond</p>
          <p className='about-description'>Post-Lighthouse, my love for programming has only grown. I could spend all day coding without it feeling like work. When I sit down at my desk to work on a project, I have the ability to build something unique, something exciting, and something I am proud of. That's pretty damn cool. I'm just getting started and I can't wait to see where my career takes me!</p>
        </div>
      </div>
    </section>
  )
};