import { Response } from 'express';

import { json } from 'body-parser';
import RequestWithRawBody from './requestWithRawBody.interface';

/*
  Required endpoint for stripe callback processing
 */
function rawBodyMiddleware() {
  return json({
    verify: (
      request: RequestWithRawBody,
      response: Response,
      buffer: Buffer,
    ) => {
      if (
        request.url === '/callbacks/webhookStripe' &&
        Buffer.isBuffer(buffer)
      ) {
        request.rawBody = Buffer.from(buffer);
      }
      return true;
    },
  });
}

export default rawBodyMiddleware;
