db.widgetTest.find({$where:"this.url.length > 75"},{_id:0,"widgetID":1,"name":1,"url":1}).pretty();
