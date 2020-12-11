import { projects } from '../data/projects.js';

export default function Projects(props) {

  const projectList = projects.map(project => {
    return (
      <ul>
        <li>{project.name}</li>
        <li>{project.description}</li>
        <li>{project.image}</li>
        {/* <li>{project.stack}</li> */}
        <li>{project.date}</li>
        <li>{project.github}</li>
        <li>{project.deployment}</li>
      </ul>
    )
  })

  return (
    <div className='projects'>
      {projectList}
    </div>
  );
};