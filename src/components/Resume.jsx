import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';
import cv from '../img/cv.png';
import cvDownload from '../img/cvDownload.pdf';
import '../styles/resume.scss';

import { Link } from 'react-router-dom';

export default function Resume(props) {
  return (
    <div id="resume">
      <a href='https://www.canva.com/design/DAEKsksAqk0/6UMd6TfyRqQwsOdEp5ZX8A/view?utm_content=DAEKsksAqk0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank" rel="noopener noreferrer" className="bttn-stretch bttn-md bttn-success cv-bttn" id='canva'>
        View on Canva
        <PageviewIcon />
      </a> 
      <img src={cv} alt='cv' id='cv' />
      {/* <a href='/src/img/cvDownload.pdf' download className="bttn-stretch bttn-md bttn-success cv-bttn" id='download'>
        Download as PDF 
        <GetAppIcon />
      </a>  */}

      <Link
        to="route"
        className="bttn-stretch bttn-md bttn-success cv-bttn" id='download'
        onClick={(event) => { event.preventDefault(); window.open(cvDownload); }}>
            Click to download
      </Link>
    </div>
  )
};