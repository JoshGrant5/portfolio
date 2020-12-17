import { skills } from '../data/skills';

export default function Skills(props) {

  return (
    <div id='skills'>
      <div className='container'>
        <h3>Languages</h3>
        <p>{skills.languages}</p>
      </div>
      <div className='container'>
        <h3>Frameworks, Libraries & Environments</h3>
        <p>{skills.frameworks}</p>
      </div>
      <div className='container'>
        <h3>Databases</h3>
        {skills.databases}
      </div>
      <div className='container'>
        <h3>Version Control</h3>
        {skills.versionControl}
        </div>
      <div className='container'>
        <h3>Testing</h3>
        {skills.testing}
      </div>
  </div>
  );
};