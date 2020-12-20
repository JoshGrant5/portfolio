import { useSpring, animated } from 'react-spring';
import { projects } from '../data/projects.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import heroku from '../img/heroku.svg';
import netlify from '../img/netlify.svg';
import '../styles/about.scss';
import '../styles/projects.scss';

export default function Projects(props) {

  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0, transition: 'opacity 2s' },
  });

  const projectList = projects.map(project => {
    const image = require(`../img/${project.image}`);

    let icon;
    if (project.host) {
      icon = project.host === 'Netlify' ? netlify : heroku;
    }

    return (      
      <div id='project-tl' key={project.name}>
        <div className='tl-item'>
          <div className='tl-bg' >
            <animated.img style={fade} src={image.default} alt={image.default} className='tl-bg-img' />
          </div>
          <div className='line-container'>
            <div className='text-container'>
              <p className='tl-header'>{project.name}</p>
              <p className='tl-date'>{project.date}</p>
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
                      <animated.img style={fade} src={icon} alt='icon' />
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
              <img src={image.default} alt='project' className='project-img' /> 
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