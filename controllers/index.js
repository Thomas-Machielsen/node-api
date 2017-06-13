const indexService = require('../services/index');

function showIndex(req, res) {
  indexService.getIndex()
  .then(results =>
    res.render('index', { data: results })
  )
  .catch((err) => {
    res.status(404);
    res.json({ error: err });
  });
}

module.exports = { showIndex };

