let db = require("../model/db");

let listEvents = function(req, res){
    console.log("listEvents");

    let sql = "select * from events";

    db.query(sql, function(err , results){
        if(err){
            console.log("could not get todoItems", err);
            res.sendStatus(500);
        } else {
            res.json(results);
        }
    })
};

let eventDetails = function(req, res){
    console.log("eventDetails")

    let id = req.params.id

    let sql = "select id, eventName, address, price, eventmusic, eventdate, description from events where id = ?";
    let params = []
    params.push(id)

    db.query(sql, params, function(){
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

module.exports = {
    listEvents,
    eventDetails
}