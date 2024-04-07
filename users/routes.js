const router = require("express").Router();

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
// Controller Imports
const UserController = require("./controllers/UserController");

router.get("/", [isAuthenticatedMiddleware.check], UserController.getUser);

module.exports = router;
