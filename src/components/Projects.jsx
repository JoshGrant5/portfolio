import { projects } from '../data/projects.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import heroku from '../img/heroku.svg';
import netlify from '../img/netlify.svg';
import '../styles/about.scss';
import '../styles/projects.scss';

export default function Projects(props) {

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
            <img src={image.default} alt={image.default} className='tl-bg-img' />
          </div>
          <div className='line-container'>
            <div className='text-container'>
              <p className='tl-header'>{project.name}</p>
              <div className='tl-content'>
                <p>{project.description}</p>
                <br></br>
                { project.host ? (
                  <div className='project-icons'>
                    <a className='bttn-stretch bttn-md bttn-success repo-bttn' href={project.github}>View Repository <GitHubIcon /></a> 
                    <a className='bttn-stretch bttn-md bttn-success host-bttn' href={project.deployment}>View Deployment <img src={icon} alt='icon' /></a> 
                  </div>
                ) : 
                  <div className='project-icons'>
                    <a className='bttn-stretch bttn-md bttn-success repo-bttn' href={project.github}>View Repository <GitHubIcon /></a> 
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