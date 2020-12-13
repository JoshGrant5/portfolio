import { fullDegrees, singleCourses } from '../data/education';
import '../styles/education.scss';

export default function Education(props) {

  const degrees = fullDegrees.map(degree => {
    return (
      <section className='school'>
        <h1>{degree.school} <span>{degree.date}</span> </h1>
        <h4>{degree.type}: {degree.program}</h4>
      </section>
    );
  });

  const courses = singleCourses.map(course => {
    return (
      <section className='school'>
        <h1>{course.school} <span>{course.date}</span> </h1>
        <h4>{course.type}: {course.course}</h4>
      </section>
    );
  });

  return (
    <div id='education'>
      {degrees}
      {courses}
    </div>
  );
;}