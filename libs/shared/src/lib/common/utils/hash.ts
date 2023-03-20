import * as bcrypt from 'bcrypt';

export class Hash {
  static make(plainText) {
    return bcrypt.hashSync(plainText, 10);
  }

  static compare(plainText, hash) {
    return bcrypt.compareSync(plainText, hash);
  }
}
