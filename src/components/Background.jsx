import { experience } from '../data/experience.js';
import '../styles/background.scss';

export default function Background(props) {

  const roles = experience.map(role => {

    const responsibilities = role.responsibilities.map(duty => <li>{duty}</li>);

    return (
      <section className='role'>
        <h1>{role.role} <span>{role.dates}</span> </h1>
        <h3>{role.company}</h3>
        <ul>
          {responsibilities}
        </ul>
      </section>
    )
  });

  return (
    <div id='background'>
      {roles}
    </div>
  )
};