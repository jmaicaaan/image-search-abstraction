import config from '../../config/config.json';
import googleImage from 'google-images';
class ImageSearchService {

  client;

  constructor() {
    this.client = new googleImage(config.googleImage.cse, config.googleImage.apiKey);
  }

  searchImage = (term, offset) => {
    return this.client.search(term, { page: offset });
  };
}



export { ImageSearchService }

