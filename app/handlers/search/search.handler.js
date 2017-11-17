import { ImageSearchService } from '../../services/imageSearch.service';

const imageSearchService = new ImageSearchService();

function searchHandler(req, res) {
  let term = req.query.term;
  let offset = req.query.offset;
  imageSearchService.searchImage(term, offset)
    .then((resp) => {
      res.send(resp);
    });
}

export { searchHandler } 