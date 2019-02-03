db.widgetForecast.find({$where:"this.url.indexOf('http://www.') == 0"},{_id:0,widgetID:1,"time.start":1,url:1}).forEach(function(e){
	db.widgetForecast.update({widgetID:e.widgetID,"time.start":e.time.start},{$set:{"url":e.url.replace("http://www.","")}});
});

db.widgetForecast.find({$where:"this.url.indexOf('https://www.') == 0"},{_id:0,widgetID:1,"time.start":1,url:1}).forEach(function(e){
		db.widgetForecast.update({widgetID:e.widgetID,"time.start":e.time.start},{$set:{"url":e.url.replace("https://www.","")}});
});

db.widgetForecast.find({$where:"this.url.indexOf('http://') == 0"},{_id:0,widgetID:1,"time.start":1,url:1}).forEach(function(e){
	db.widgetForecast.update({widgetID:e.widgetID,"time.start":e.time.start},{$set:{"url":e.url.replace("http://","")}});
});

db.widgetForecast.find({$where:"this.url.indexOf('https://') == 0"},{_id:0,widgetID:1,"time.start":1,url:1}).forEach(function(e){
	db.widgetForecast.update({widgetID:e.widgetID,"time.start":e.time.start},{$set:{"url":e.url.replace("https://","")}});
});

db.widgetForecast.find({$where:"this.url.indexOf('www.') == 0"},{_id:0,widgetID:1,"time.start":1,url:1}).forEach(function(e){
	db.widgetForecast.update({widgetID:e.widgetID,"time.start":e.time.start},{$set:{"url":e.url.replace("www.","")}});
});
