import { projects } from '../data/projects.js';
import '../styles/projects.scss'

export default function Projects(props) {

  const projectList = projects.map(project => {
    return (
      <div className='project'>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        {/* <p>{project.stack}</p> */}
        <p>{project.date}</p>
        <p>{project.github}</p>
        <p>{project.deployment}</p>
        <img src={project.image} alt='project' />
      </div>
    )
  })

  return (
    <div id='projects'>
      {projectList}
    </div>
  );
};