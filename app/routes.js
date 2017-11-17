import { introHandler, searchHandler } from './handlers/index';

export function routes(app) {
  app.get('/', introHandler);
  app.get('/search?:term?/:offset?', searchHandler);
};