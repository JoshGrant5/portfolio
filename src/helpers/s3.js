import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION
});

const s3 = new AWS.S3();

const params = {
  Bucket: process.env.REACT_APP_AWS_BUCKET,
  Key: 'joshgrant-cv.pdf'
};

export const downloadCV = () => {
  s3.getObject(params, (err, data) => {
    if (!err) {
      let blob = new Blob([data.Body], {type: data.ContentType});
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download='Josh-Grant-CV';
      link.click();
    } else {
      console.log(err)
    }
  });
};

export default downloadCV;