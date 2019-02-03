db.widgetForecast.update({},{$rename:{"time.timeOffset":"time.offsetFromGMT"}},{multi:true});


