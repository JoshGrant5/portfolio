import { skills } from '../data/skills';

export default function Skills(props) {

  return (
    <div id='skills'>
      <div className='container'>
        <h3 className='tech-title'>Languages</h3>
        <p>{skills.languages}</p>
      </div>
      <div className='container'>
        <h3 className='tech-title'>Frameworks, Libraries & Environments</h3>
        <p>{skills.frameworks}</p>
      </div>
      <div className='container'>
        <h3 className='tech-title'>Databases</h3>
        {skills.databases}
      </div>
      <div className='container'>
        <h3 className='tech-title'>Version Control</h3>
        {skills.versionControl}
        </div>
      <div className='container'>
        <h3 className='tech-title'>Testing</h3>
        {skills.testing}
      </div>
  </div>
  );
};