db.widgetArchiveTest.update(
	{
		"widgetID":5,
		"time.start": ISODate("2014-08-31T14:00:00Z")
	},
	{
		$unset:{
			isDurable:1
		}
	}
);
