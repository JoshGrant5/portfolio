import { NavLink } from 'react-router-dom';

import Skills from './Skills';
import TouchAppIcon from '@material-ui/icons/TouchApp';

import '../styles/home.scss';

export default function Home() {

  return (
    <div id='bio'>
      {/* This div placement below allows for grid positioning of section */}
      <div></div> 
      <section>
        <p className='summary'>Hi, I'm <span>Josh</span>.</p>
        <p className='summary'>I'm a <span>25</span> year-old web developer from <span>North Vancouver</span>, BC.</p>
        <p className='summary'>I've been a <span>criminology</span> student, a contract <span>salesman</span>, a <span>lumber trader</span>, and now a <span>code junkie</span>!</p>
        <p className='summary'>I haven't been programming long, but I've finally found what I <span>love</span> to do.</p>
        <div className='home-bttns'>
          <NavLink to="/projects" activeClassName='is-selected' className='bttn-stretch bttn-md bttn-success project-bttn'>
            Check out what I've built so far!
            <TouchAppIcon />
          </NavLink>
          <NavLink to="/about" activeClassName='is-selected' className='bttn-stretch bttn-md bttn-success about-bttn'>
            Get to know me a bit more! 
            <TouchAppIcon />
          </NavLink>
        </div>
        <p className='summary stack'><span> {'< My Stack />'} </span></p>
        <Skills />
      </section>
    </div>
  );
};

