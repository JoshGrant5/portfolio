import skills from '../data/skills';

export default function Skills(props) {

  const languages = skills.languages.map(skill => {
    return (
      <ul>
        <li>{skill}</li>
      </ul>
    )
  });

  const frameworksAndLibraries = skills.frameworks.map(skill => {
    return (
      <ul>
        <li>{skill}</li>
      </ul>
    )
  });

  const databases = skills.databases.map(skill => {
    return (
      <ul>
        <li>{skill}</li>
      </ul>
    )
  });

  const versionControl = skills.versionControl.map(skill => {
    return (
      <ul>
        <li>{skill}</li>
      </ul>
    )
  });

  const testing = skills.testing.map(skill => {
    return (
      <ul>
        <li>{skill}</li>
      </ul>
    )
  });

  return (
    <div className='skills'>
      <h3>Languages</h3>
      {languages}
      <h3>Frameworks & Libraries</h3>
      {frameworksAndLibraries}
      <h3>Databases</h3>
      {databases}
      <h3>Version Control</h3>
      {versionControl}
      <h3>Testing</h3>
      {testing}
    </div>
  );
};