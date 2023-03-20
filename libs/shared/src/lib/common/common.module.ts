import { Global, Module } from '@nestjs/common';
import { ExistsValidator } from './validators/exists.validator';
import { UniqueValidator } from './validators/unique.validator';
import { TimeAgoProvider } from './timeago';

@Global()
@Module({
  providers: [UniqueValidator, ExistsValidator, TimeAgoProvider],
  exports: [TimeAgoProvider],
})
export default class CommonModule {}
