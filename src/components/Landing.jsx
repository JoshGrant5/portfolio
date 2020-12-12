import cropped4 from '../img/cropped4.jpg';

export default function Landing(props) {

  return (
    <div>
      <aside id='sidebar'></aside>

      <article id='heading'>
        <span id='name'>Josh Grant</span>
        <span id='title'>Full Stack Developer</span>
      </article>

      <button class="bttn-stretch bttn-md bttn-success">View</button>

      <img src={cropped4} alt='profile-pic' id='profile-pic' />
   
    </div>
  );
};