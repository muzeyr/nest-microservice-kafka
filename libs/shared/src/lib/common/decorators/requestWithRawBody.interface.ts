import { Request } from 'express';

interface RequestWithRawBody extends Request {
  raw: any;
  rawBody: Buffer;
  body: any;
}
export default RequestWithRawBody;
