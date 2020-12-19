import coding from '../img/coding.jpg';
import lighthouse from '../img/lighthouse.jpg';
import lumber from '../img/lumber.jpg';
import ottawa from '../img/ottawa.jpg';
import '../styles/about.scss';

export default function about(props) {

  return (
    //* Styles inspired by and modified off of design by Jeff Glen https://codepen.io/jeffglenn/pen/KNYoKa/
    <section id='about-tl'> 
      <div className='tl-item'>
        <div className='tl-bg' >
          <img src={ottawa} alt='ottawa' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>Ottawa's Finest</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2013 - 2017</p>
          <p className='about-description'>Living in the Nation's Capital, I earned my Bachelor of Arts degree studying criminology at Carleton University.</p>
        </div>
      </div>

      <div className='tl-item'>
      <div className='tl-bg' >
          <img src={lumber} alt='lumber' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>All About The 2x4's</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2017 - 2020</p> 
          <p className='about-description'>While attending Carleton I spent my summers working at Dick's Lumber in North Vancouver. After graduating, they gave me an opportunity in contract sales. I'd spend the next 3 years in the lumber industry in sales, transitioning to commodity trading in late 2019 to work as a lumber trader for Boscus Canada.</p>
        </div>
      </div>

      <div className='tl-item'>
        <div className='tl-bg' >
          <img src={lighthouse} alt='lighthouse' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>Labber For Life</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2020</p>
          <p className='about-description'>After years of thinking of coding through the lense of, "that's cool, I wonder if I'd be able to do that", I finally made the plunge. HarvardX CS50 made me fall in love with programming and dream of becoming a developer. I enrolled in Lighthouse Labs Web Development Bootcamp to make that dream a reality. Three months later, my love for programming has only grown. And I'm just getting started.</p>
        </div>
      </div>

      <div className='tl-item'>
       <div className='tl-bg' >
          <img src={coding} alt='coding' className='tl-bg-img' />
        </div>
        <div className='tl-header'>
          <p>This Is Where The Fun Begins</p>
        </div>
        <div className='tl-content'>
          <p className='tl-date'>2020 & Beyond</p>
          <p className='about-description'>I'm currently looking for my first junior developer role to break into the industry with. I can't wait for that opportunity.</p>
        </div>
      </div>
    </section>
  )
};