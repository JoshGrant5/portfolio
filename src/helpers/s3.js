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

export const getCV = () => {
  s3.getObject(params, (err, data) => {
    err ? console.log(err) : console.log(data)
  });
};

export default getCV;