import { projects } from '../data/projects.js';

export default function Projects(props) {

  const projectList = projects.map(project => {
    return (
      <p>{project.name}</p>
    )
  })

  return (
    <div className='projects'>
      {projectList}
    </div>
  );
};