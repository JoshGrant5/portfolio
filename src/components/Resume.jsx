import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';
import cv from '../img/cv.png';
import '../styles/resume.scss';

export default function Resume(props) {

  return (
    <div id="resume">
      <button class="bttn-stretch bttn-md bttn-success cv-bttn" id='canva' onClick={() => props.setPage('TRANSITION')} >
        View on Canva
        <PageviewIcon />
      </button> 
      <img src={cv} alt='cv' id='cv' />
      <button class="bttn-stretch bttn-md bttn-success cv-bttn" id='download' onClick={() => props.setPage('TRANSITION')} >
        Download as PDF 
        <GetAppIcon />
      </button> 
    </div>
  )
};