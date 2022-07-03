let express = require("express");

let route = new express.Router();

let controller = require("../Controllers/userController");

route.post("/register", controller.register);

route.post("/login", controller.login)

module.exports = route

/**{
    "eventName":"Doideira Louca",
    "address": "casa das prima, 2302 main road TX",
    "price":"$20",
    "eventmusic":"Forro",
    "eventdate":"20/08/2022",
    "description":"chama as prima e tras sua bebida"
} */