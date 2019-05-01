var filterDate
var filterDateStart = ISODate('2016-06-02T00:00:00.000Z')
var filterDateEnd = ISODate('2016-07-20T00:00:00.000Z')

var eventCursor = db.event.find(
			{
				'time.start':{
					'$gte': filterDateStart,
					'$lte': filterDateEnd
				}
			},
			{
				"time.start":1,
				"venue.state":1,
				"venue.city":1,
				name:1,
				type:1,
				danceType:1,
				url:1,
				_id:0
			}
).sort({"time.start":1,"venue.state":1,"venue.city":1}).pretty();

	//- Test how many documents are in cursor
	//eventCursor.count()

eventCursor.forEach(
	function(x){
		print("start: " + (x.time.start).toISOString().substring(0,16).replace("T"," @ "));
		print("city: " + x.venue.city + ", " + x.venue.state);
		print("name: " + x.name);
		print("type: " + x.type);
		print("dance type: " + x.danceType);
		print("URL: " + x.url);
		print("");
	}
);


