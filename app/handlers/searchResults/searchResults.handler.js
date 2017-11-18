import { ImageSearchService } from '../../services/imageSearch.service';

const imageSearchService = new ImageSearchService();

function searchResultsHandler(req, res) {
  imageSearchService.getLatestResults()
    .then((results) => {
      return res.send(results);
    });
}

export { searchResultsHandler } 