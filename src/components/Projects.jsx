import { projects } from '../data/projects.js';
import '../styles/about.scss';
import '../styles/projects.scss';

export default function Projects(props) {

  const projectList = projects.map(project => {
    let image = require(`../img/${project.image}`);

    return (      
      <div id='project-tl'>
        <div className='tl-item'>
          <div className='tl-bg' >
            <img src={image.default} alt={image.default} className='tl-bg-img' />
          </div>
          <div className='line-container'>
            <div className='text-container'>
              <p className='tl-header'>{project.name}</p>
              <p className='tl-content'>{project.description}</p>
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