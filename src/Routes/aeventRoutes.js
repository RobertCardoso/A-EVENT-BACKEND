let express = require("express");
let router = new express.Router();
let controller = require("../Controllers/aeventController");
let auth = require("../middleware/auth");

router.get("/events", controller.listEvents);

router.get("/events/:id", auth.verifyJWT, controller.eventDetails)

module.exports = router
