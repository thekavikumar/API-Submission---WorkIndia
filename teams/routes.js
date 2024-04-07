const router = require("express").Router();

const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
// Controller Imports
const TeamController = require("./controllers/TeamController");
const PlayerModel = require("../common/models/Player");

router.post(
  "/api/teams",
  [isAuthenticatedMiddleware.check],
  TeamController.createTeam
);

router.post(
  "/api/teams/:team_id/squad",
  [isAuthenticatedMiddleware.check],
  TeamController.addToSquad
);

module.exports = router;
