import { Controller, Get, HttpStatus, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Redirect('https://nestjs.com', HttpStatus.TEMPORARY_REDIRECT)
  @Get('/test1')
  test1() {
    return;
  }

  @Redirect('https://nestjs.com', HttpStatus.TEMPORARY_REDIRECT)
  @Get('/test2')
  test2() {
    return { statusCode: HttpStatus.FOUND, url: 'https://www.google.com' };
  }

  @Redirect()
  @Get('/test3')
  test3() {
    return { statusCode: HttpStatus.FOUND, url: 'https://www.google.com' };
  }

  @Redirect()
  @Get('/test4')
  test4() {
    return;
  }
}
