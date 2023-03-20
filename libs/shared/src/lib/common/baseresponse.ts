export type HttpRequest<T = any> = {
  body?: T;
};

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  serverError = 500,
}

export const ok = (data?: any): HttpResponse => ({
  statusCode: HttpStatusCode.ok,
  body: data,
});

export const serverError = (data?: any): HttpResponse => ({
  statusCode: HttpStatusCode.serverError,
  body: data,
});
