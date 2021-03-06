import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { projects } from '../data/projects.js';

import GitHubIcon from '@material-ui/icons/GitHub';
import heroku from '../img/heroku.svg';
import netlify from '../img/netlify.svg';
import firebase from '../img/firebase.svg';

import '../styles/about.scss';
import '../styles/projects.scss';

export default function Projects(props) {

  if (document.getElementById('navbar')) { 
    document.getElementById('navbar').style.backgroundColor = document.documentElement.clientWidth > 780 ? '#0d121a' : '#273442';
  }

  // Scroll to top of page on render (specific problem for mobile viewports)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectList = projects.map(project => {
    const image = require(`../img/${project.image}`);

    let icon;
    if (project.host) {
      if (project.host === 'Firebase') {
        icon = firebase;
      } else {
        icon = project.host === 'Netlify' ? netlify : heroku;
      }
    }

    return (      
      <div id='project-tl' key={project.name}>
        <div className='tl-item'>
          <div className='tl-bg' >
            <LazyLoadImage effect='blur' src={image.default} alt={image.default} key={project.name} className='tl-bg-img' />
          </div>
          <div className='line-container'>
            <div className='text-container'>
              <p className='tl-header'>{project.name} <span className='tl-date'>{project.date}</span> </p>
              <p className="responsive-date">{project.date}</p>
              <div className='tl-content'>
                <p>{project.description}</p>
                { project.host ? (
                  <div className='project-icons'>
                    <a className='bttn-stretch bttn-md bttn-success repo-bttn' href={project.github} target="_blank" rel="noopener noreferrer">
                      View Repository 
                      <GitHubIcon />
                    </a> 
                    <a className='bttn-stretch bttn-md bttn-success host-bttn' href={project.deployment} target="_blank" rel="noopener noreferrer">
                      View Deployment 
                      <img src={icon} alt='icon' />
                    </a> 
                  </div>
                ) : 
                  <div className='project-icons'>
                    <a className='bttn-stretch bttn-md bttn-success repo-bttn' href={project.github} target="_blank" rel="noopener noreferrer">
                      View Repository 
                      <GitHubIcon />
                    </a> 
                  </div>
                }   
              </div>
            </div>
            <div className='project-img-container'>
              <LazyLoadImage  effect='blur'src={image.default} width='100%' height='100%' alt='project' key={project.image} className='project-img' /> 
            </div> 
          </div>
        </div>      
      </div>
    );
  });

  return (
    <section id='projects'>
      {projectList.reverse()}
    </section>
  );
};