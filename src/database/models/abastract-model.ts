import { Model } from 'sequelize';

export abstract class AbstractModel extends Model {
  static initializer(sequelize?: any): void {
    throw new Error('Model config is not implemented');
  }
}
