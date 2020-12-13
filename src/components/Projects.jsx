import { projects } from '../data/projects.js';
import '../styles/projects.scss'

export default function Projects(props) {

  const projectList = projects.map(project => {
    let image = require(`../img/${project.image}`);

    const other = () => {
      if (project.stack.other) { 
        return  (
          <div>
            <h3>Other</h3>
            {project.stack.other}
          </div>
        )
      }
    };

    const testing = () => {
      if (project.stack.testing) { 
        return  (
          <div>
            <h3>Testing</h3>
            {project.stack.testing}
          </div>
        )
      }
    }

    return (
      <div className='container'>
        <div className='project'>
          <h1>{project.name} <span>{project.date}</span> </h1>
          <p>{project.description}</p>
          <p>{project.github}</p>
          <p>{project.deployment}</p>
        </div>
        <div className='stack'>
          <h3>Front End</h3>
            {project.stack.frontEnd}
          <h3>Back End</h3>
            {project.stack.backEnd}
          {other()}
          {testing()}
        </div>
        <img src={image.default} alt='project' className='project-img' />
      </div>
    )
  })

  return (
    <div id='projects'>
      {projectList.reverse()}
    </div>
  );
};