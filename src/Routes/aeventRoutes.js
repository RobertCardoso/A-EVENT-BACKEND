let express = require("express");
let router = new express.Router();
let controller = require("../Controllers/aeventController");
let auth = require("../middleware/auth");

router.get("/events", controller.listEvents);

router.get("/events/:id", auth.verifyJWT, controller.eventDetails)

router.post("/events", auth.verifyJWT, controller.createEvent)

router.put("/events/:id", auth.verifyJWT, controller.updateEvent)

module.exports = router
