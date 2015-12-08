var needle = require('needle');
var Connect = require('./connect');

var count = 0;
var remaining = 0;
var chunk = 200;

Connect.executeQuery('SELECT COUNT(1) FROM MLSMASTER.dbo.AutoListings', function (err, recordset) {
	var json = recordset[0];
	var key = Object.keys(json);

	count = json[key];
	remaining = count;
	remaining = 6371664;
	
	console.log(count + ' listings to process...');
	console.log('Starting...');

	repeat();
});

function repeat() {
	if (remaining <= 0) return;

	console.log(remaining + ' listings left...');

	var sql = 'SELECT * FROM MLSMASTER.dbo.AutoListings ORDER BY MLSArea, MLSNumber OFFSET '
		+ (count - remaining) + ' ROWS FETCH NEXT ' + chunk + ' ROWS ONLY';

	Connect.executeQuery(sql, function (err, recordset) {
		if (err) {
			console.log(err);
			repeat();
			return;
		}

		var numRows = recordset.length;
		var done = 0;
		for (var i = 0; i < numRows; i++) {
			var listing = recordset[i];
			needle.put('http://localhost:9200/wolfconnect/mls/' + listing.MLSNumber, listing, { json: true }, function (err, res, body) {
				done++;
				if (done == numRows) {
					remaining = (remaining - numRows);
					repeat();
				}
			});
		}
	});
}