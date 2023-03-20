import { Transform } from 'stream';

export class FilterTransform extends Transform {
  private filterProps: Array<String>;

  constructor(filterProps: Array<String>, options?: any) {
    if (!options) options = {};
    options.objectMode = true;
    super(options);
    this.filterProps = filterProps;
  }

  _transform(chunk: any, encoding?: string, callback?: Function) {
    const filteredKeys = Object.keys(chunk).filter((key) => {
      return this.filterProps.indexOf(key) == -1;
    });
    const filteredObj = filteredKeys.reduce((accum: any, key: any) => {
      accum[key] = chunk[key];
      return accum;
    }, {});
    this.push(filteredObj);
    callback();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _flush(cb: Function) {}
}
