import { isDefined } from 'class-validator';

export function processUrl(sourceUrl) {
  const awsUrl = process.env.AWS_URL;
  const cloudFrontPath = process.env.CLOUD_FRONT_PATH;
  if (isDefined(sourceUrl)) {
    return sourceUrl.replace(awsUrl, cloudFrontPath);
  }
  return sourceUrl;
}

export function processUrlWithResizing(sourceUrl, width = 600, height = 400) {
  if (process.env.RESIZE_IMAGE === 'true') {
    let resultUrl = sourceUrl;
    const awsUrl = `${process.env.AWS_URL}/`;
    if (isDefined(resultUrl)) {
      resultUrl = resultUrl.replace(awsUrl, '');
      resultUrl = {
        bucket: process.env.AWS_BUCKET,
        key: resultUrl,
        edits: {
          resize: {
            width: 600,
            height: 400,
            fit: 'inside',
          },
        },
      };
      return `${process.env.RESIZE_URL}/${Buffer.from(
        JSON.stringify(resultUrl),
      ).toString('base64')}`;
    }
    return resultUrl;
  } else {
    return processUrl(sourceUrl);
  }
}
