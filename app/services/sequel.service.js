import Sequelize from 'sequelize';
import config from '../../config/config.json';

class SequelService {
  _sequel;

  constructor() {
    if (process.env.NODE_ENV == 'production') {
      this._sequel = new Sequelize(process.env.DATABASE_URL || config.production.uri , {
        dialectOptions: {
          ssl: true
        }
      });
    } else {
      this._sequel = new Sequelize(config.development.database, config.development.username, config.development.password, {
        host: config.development.host,
        dialect: config.development.dialect
      });
    }
  }

  getInstance = () => {
    return this._sequel;
  }
}

export { SequelService } 