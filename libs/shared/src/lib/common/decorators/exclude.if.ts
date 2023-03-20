import { applyDecorators } from '@nestjs/common';
import { Transform, TransformFnParams } from 'class-transformer';
import { isDefined, ValidateIf } from 'class-validator';

export interface ExcludeIfOptions {
  ignoreValidation: boolean;
}
export function ExcludeIf<T = any>(
  excludeCondition: (obj: T) => boolean,
  options?: ExcludeIfOptions,
): any {
  const transformDecorator = Transform(({ value, obj }) => {
    if (excludeCondition(obj)) return undefined;
    return value;
  });

  if (options?.ignoreValidation) {
    const validatorDecorator = ValidateIf((obj) => !excludeCondition(obj));
    return applyDecorators(transformDecorator, validatorDecorator);
  }

  return applyDecorators(transformDecorator);
}

export function TransformIfDefined(
  transformFn: (params: TransformFnParams) => any,
): any {
  return Transform((values) => {
    if (!isDefined(values.value)) {
      return transformFn(values);
    }
    return values.value;
  });
}
