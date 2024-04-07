const router = require("express").Router();

const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
// Controller Imports
const TeamController = require("./controllers/TeamController");

router.post(
  "/api/teams/:team_id/squad",
  [isAuthenticatedMiddleware.check],
  TeamController.create
);

module.exports = router;
