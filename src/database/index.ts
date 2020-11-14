import {Sequelize} from 'sequelize';
import {Animal} from './models';

import config from './config/dbtsconfig';

const models = [Animal];

class Database {
  private connection: any;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(config);
    models.map(m => m.initializer(this.connection));
  }
}

export default new Database();