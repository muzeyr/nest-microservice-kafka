import { Injectable } from '@nestjs/common';
import TimeAgo from 'javascript-time-ago';
import { FormatStyle } from 'javascript-time-ago/style';
import * as en from 'javascript-time-ago/locale/en';

@Injectable()
export class TimeAgoProvider {
  private timeAgoEngine: TimeAgo;

  constructor() {
    this.timeAgoEngine = TimeAgoProvider.timeAgoEngine;
  }

  format(input: Date | number, style?: string | FormatStyle): string {
    return this.timeAgoEngine.format(input);
  }

  static timeAgoGetter() {
    TimeAgo.addDefaultLocale(en);
    return new TimeAgo('en-US');
  }

  static readonly timeAgoEngine: TimeAgo = TimeAgoProvider.timeAgoGetter();
}
