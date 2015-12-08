var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

module.exports = function(app) {
  app.get('/listings/', function(req, res, next) {
    var query = req.query.q;
    var queryBody = {};
    
    if (query && query != '') {
      queryBody = {
            query: {
                dis_max: {
                    queries: [
                        {
                            match: {
                              MLSNumber: query
                            }
                        },
                        {
                            match: {
                                Remarks: query
                            }
                        },
                        {
                            match: {
                                AgentName: query
                            }
                        },
                        {
                            match: {
                                City: query
                            }
                        },
                        {
                            match: {
                                OfficeName: query
                            }
                        }
                    ]
                }
            }
        };  
    }
    
    client.search({
      index: 'wolfconnect',
      type: 'mls',
      body: queryBody
    }).then(function (resp) {
        var items = resp.hits.hits;
        var listings = items.map(function(item) {
            return item._source;
        });
        res.send(listings);
    }, function (err) {
      console.trace(err.message);
      res.status(500).end();
    });
  });
}