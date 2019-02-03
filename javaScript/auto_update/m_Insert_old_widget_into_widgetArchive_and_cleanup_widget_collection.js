function archiveOldwidget(){

	// Get list of "time.offsetFromGMT" values
	var offsets = db.widget.aggregate(
		[
			{
				$group:
				{
					_id:"$time.offsetFromGMT",
					offset:{$max:"$time.offsetFromGMT"}
				}
			}
		]
	)

	// Loop through widgets by offset from GMT
	offsets.forEach(
		function(e){
			var msOffset = e.offset * 60000

			var endtm = new ISODate()
			endtm.setTime(new ISODate().getTime() + msOffset)

			// Copy widgets to widgetArchive collection
			var widgetToArchive = db.widget.find({"time.end":{$lte:endtm},"time.offsetFromGMT":e.offset}).toArray();
			db.widgetArchive.insert(widgetToArchive);

			// Remove widgets from widget collection
			db.widget.remove({"time.end":{$lte:endtm},"time.offsetFromGMT":e.offset});

			print("# of widget instances inserted into widgetArchive & removed from widget:" + widgetToArchive.length);
		}
	) // end of forEach
}

