import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';
import cv from '../img/cv.png';
import cv_download from '../img/cv_download.pdf';
import '../styles/resume.scss';

export default function Resume(props) {
  return (
    <div id="resume">
      <a href='https://www.canva.com/design/DAEKsksAqk0/6UMd6TfyRqQwsOdEp5ZX8A/view?utm_content=DAEKsksAqk0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank" rel="noopener noreferrer" className="bttn-stretch bttn-md bttn-success cv-bttn" id='canva'>
        View on Canva
        <PageviewIcon />
      </a> 
      <img src={cv} alt='cv' id='cv' />
      <a href={cv_download} download='Josh_Grant_CV.pdf' className="bttn-stretch bttn-md bttn-success cv-bttn" id='download'>
        Download as PDF 
        <GetAppIcon />
      </a> 
    </div>
  )
};