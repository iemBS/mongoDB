// Get query correct with find function first
db.widgetArchiveTest.find(
{
	$or:[
		{widgetID:	7	},
		{widgetID:	12	},
		{widgetID:	16.1	},
		{widgetID:	16.2	},
		{widgetID:	16.3	},
		{widgetID:	16.4	},
		{widgetID:	16.5	},
		{widgetID:	16.6	},
		{widgetID:	16.7	},
		{widgetID:	16.8	},
		{widgetID:	17.1	},
		{widgetID:	18	},
		{widgetID:	19.1	},
		{widgetID:	19.2	},
		{widgetID:	20.1	},
		{widgetID:	20.2	},
		{widgetID:	22.1	},
		{widgetID:	26	},
		{widgetID:	32.1	},
		{widgetID:	33	},
		{widgetID:	33	},
		{widgetID:	42.1	},
		{widgetID:	44.1	},
		{widgetID:	50	},
		{widgetID:	55	},
		{widgetID:	56.1	},
		{widgetID:	57	},
		{widgetID:	61.1	},
		{widgetID:	62.1	},
		{widgetID:	67.1	},
		{widgetID:	67.1	},
		{widgetID:	67.1	},
		{widgetID:	76.1	},
		{widgetID:	76.1	},
		{widgetID:	92.1	},
		{widgetID:	92.2	},
		{widgetID:	92.3	},
		{widgetID:	92.4	},
		{widgetID:	92.5	},
		{widgetID:	94.1	},
		{widgetID:	94.2	},
		{widgetID:	95.1	},
		{widgetID:	100	},
		{widgetID:	101.1	},
		{widgetID:	102.1	},
		{widgetID:	106	}
	]
},{widgetID:1}
).pretty()

// Then create update query
db.widgetArchiveTest.update(
	{
	$or:[
		{widgetID:	7	},
		{widgetID:	12	},
		{widgetID:	16.1	}
	]
	},
	{
		$set:{
			"time.canVary":1
		}
	},
	{
		multi:true
	}
);


db.widgetForecast.update(
	{
		"frequency.period":"weekly"
	},
	{
		$unset:{
			instance:""
		}
	},
	{
		multi:true
	}
);






