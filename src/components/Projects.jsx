import { projects } from '../data/projects.js';
import '../styles/projects.scss'

export default function Projects(props) {

  const projectList = projects.map(project => {
    let image = require(`../img/${project.image}`);

    const frontEnd = project.stack.frontEnd;
    frontEnd.map(item => <p>{item}</p>);

    const backEnd = project.stack.backEnd;
    backEnd.map(item => <p>{item}</p>);

    const other = project.stack.other;
    frontEnd.map(item => <p>{item}</p>);

    const testing = project.stack.testing;
    backEnd.map(item => <p>{item}</p>);

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
            {frontEnd}
          <h3>Back End</h3>
            {backEnd}
          <h3>Other</h3>
            {other}
          <h3>Testing</h3>
            {testing}
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