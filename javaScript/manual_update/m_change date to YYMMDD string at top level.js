db.widgetArchive.update(
	{
		"time.ymd":{$exists:true}
	},
	{
		$unset:{
			"time.ymd":1
		}
	},
	{
		multi:true
	}
);

db.widgetArchive.update(
	{
		"ymd":{$exists:false}
	},
	{
		$set:{
			"ymd":""
		}
	},
	{
		multi:true
	}
);

function convertTimeToString(t){
	var yearStr = t.getUTCFullYear().toString().substring(2,4);  
	var mthStr = (t.getUTCMonth() + 1).toString();// Needed because range is from 0 to 11 instead of 1 to 12.
	if(mthStr.length < 2){mthStr = "0" + mthStr};
	var dayStr = t.getUTCDate().toString();
	if(dayStr.length < 2){dayStr = "0" + dayStr};
	var timeStr =
		yearStr +
		mthStr +
		dayStr 

	return timeStr;
}
db.widgetArchive.find( { "time.start" : { $type : 9 }}).forEach( function (x) {   
  x.ymd = convertTimeToString(x.time.start); 
  db.widgetArchive.save(x);
});
