import Sequelize from 'sequelize';
import googleImage from 'google-images';

import config from '../../config/keys.json';

import { SequelService } from './sequel.service';
import searchResult from '../../models/search_result';

class ImageSearchService {

  client;
  _sequel;
  _searchResult;

  constructor() {
    this.client = new googleImage(config.googleImage.cse, config.googleImage.apiKey);
    this.getConnection();
  }

  searchImage = (term, offset) => {
    return this.client.search(term, { page: offset })
      .then((items) => {
        return this.addSearchResult(term)
          .then(() => items);
      });
  };

  addSearchResult = (term) => {
    if (term) {
      this.getConnection();
      return this._searchResult.create({ term })
        .then(() => {
          return this._sequel.close();
        });
    }
    throw 'No term to be added';
  };

  getLatestResults = () => {
    this.getConnection();
    return this._searchResult.findAll({ order:  [ ['updatedAt', 'DESC'] ], limit: 10 })
      .then((list) => {
        return this._sequel.close()
          .then(() => {
            return list;
          });
      });
  }

  getConnection = () => {
    this._sequel = new SequelService().getInstance();
    this._searchResult = searchResult(this._sequel, Sequelize);
  }
}



export { ImageSearchService }

