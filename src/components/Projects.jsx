import { projects } from '../data/projects.js';
import '../styles/about.scss';
import '../styles/projects.scss';

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
      
      <div id='project-tl'>
        <div className='tl-item'>
          <div className='tl-bg' >
            {/* <img src={image.default} alt={image.default} className='tl-bg-img' /> */}
          </div>
          <div className='tl-header'>
            <h1>{project.name}</h1>
          </div>
          <div className='tl-content'>
            <p>{project.description}</p>
            {/* <p>Living in the Nation's Capital, I earned my Bachelor of Arts degree studying criminology at Carleton University.</p> */}
          </div>
        </div>

       {/*  <div className='container'>
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
        <div className='project-img'>
         <img src={image.default} alt='project' className='project-img' /> 
        </div> */}
        
      </div>
    )
  })

  return (
    <section id='projects'>
      {projectList.reverse()}
    </section>
  );
};