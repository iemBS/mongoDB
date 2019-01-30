db.eventTest.find({$where:"this.url.length > 75"},{_id:0,"eventID":1,"name":1,"url":1}).pretty();


