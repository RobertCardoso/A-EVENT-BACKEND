# A-EVENT

LIST OF ROUTES

1 - router.get("/events", controller.listEvents);
 - this router shows the list of all events

2 - router.get("/events/:id", auth.verifyJWT, controller.eventDetails)
 - this route shows a event by its ID

3 - router.post("/events", auth.verifyJWT, controller.createEvent)
 - this route creates a new event with name, date, price, address, type of music, and description

4 -router.put("/events/:id", auth.verifyJWT, controller.updateEvent)
 - this route update a event by its ID, only the that created is able to update his own event




