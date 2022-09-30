let db = require("../model/db");

let listEvents = function(req, res){
    console.log("listEvents");

    let sql = "select * from events";

    db.query(sql, function(err , results){
        if(err){
            console.log("could not get events", err);
            res.sendStatus(500);
        } else {
            res.json(results);
        }
    })
};

let eventDetails = function(req, res){
    console.log("eventDetails")

    let id = req.params.id

    let sql = "select id, eventName, address, price, eventmusic, eventdate, description, userId from events where id = ?";
    let params = []
    params.push(id)

    db.query(sql, params, function(err, results){
        if(err){
            console.log("failed to execute query", err)
            res.sendStatus(500) 
        } else {
            if(results.length == 1){

                let result = results[0]
                res.json(results[0])
            } else if (results.length > 1){
                console.log("found more that onde result for id", id);
                res.sendStatus(500) 
            } else {
                res.sendStatus(404) 
            }
        }
    })
}

let createEvent = function(req, res){
    console.log("createEvent")
    console.log("TOKEN", req.newtoken)
    let userId = req.newtoken.user_id
    let input = req.body
    let eventName = input.eventName
    let address = input.address
    let price = input.price
    let eventmusic = input.eventmusic
    let eventdate = input.eventdate
    let description = input.description

    if(!eventName){
        res.sendStatus(400).send("eventName is required")
        return
    }
    if(!address){
        res.sendStatus(400).send("address is required")
        return
    }
    if(!price){
        res.sendStatus(400).send("price is required")
        return
    }
    if(!eventmusic){
        res.sendStatus(400).send("eventmusic is required")
        return
    }
    if(!eventdate){
        res.sendStatus(400).send("eventdate is required")
        return
    }
    if(!description){
        res.sendStatus(400).send("description is required")
        return
    }
    if(!userId){
        res.sendStatus(400).send("userId is required")
        return
    }

    let sql = "insert into events(eventName, address, price, eventmusic, eventdate, description, userId) values (?, ?, ?, ?, ?, ?, ?);"
    let params = [eventName, address, price, eventmusic, eventdate, description, userId];

    db.query(sql, params, function(err, results){
        if(err){
            console.log("Could not execute sql insert", err)
            res.sendStatus(500)
        } else {
            res.sendStatus(204) // we do not have anything to return, but we want to let the client know that everything went ok
        }
    })
}

let updateEvent = function(req, res){
    console.log("updateEvent", req.params.id)
    let input = req.body
    let id = req.params.id

    
    let eventName = input.eventName;
    let address = input.address;
    let price = input.price;
    let eventmusic = input.eventmusic;
    let eventdate = input.eventdate;
    let description = input.description;
    let userId = input.userId

    if(!eventName){
        res.sendStatus(400).send("eventName is required")
        return
    }
    if(!address){
        res.sendStatus(400).send("address is required")
        return
    }
    if(!price){
        res.sendStatus(400).send("price is required")
        return
    }
    if(!eventmusic){
        res.sendStatus(400).send("eventmusic is required")
        return
    }
    if(!eventdate){
        res.sendStatus(400).send("eventdate is required")
        return
    }
    if(!description){
        res.sendStatus(400).send("description is required")
        return
    }
    if(!userId){
        res.sendStatus(400).send("userId is required")
        return
    }

    let sql = 'update events set eventName = ?, address = ?, price= ?, eventmusic = ?, eventdate = ?, description = ? where id = ? and userId = ?'
    let params = [eventName, address, price, eventmusic, eventdate, description, id, userId]

    db.query(sql, params, (err, results) => {
		
		if (err) {
			console.log('Could not execute update sql'.err);
			res.sendStatus(500); 
		} else {
			res.sendStatus(204);
		}
    })
}


module.exports = {
    listEvents,
    eventDetails,
    createEvent,
    updateEvent
}