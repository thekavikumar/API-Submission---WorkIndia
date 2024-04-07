const router = require("express").Router();

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");
const CheckPermissionMiddleware = require("../common/middlewares/CheckPermissionMiddleware");

// Controller Imports
const MatchController = require("./controllers/MatchController");
const matchPayload = require("./schemas/MatchPayload");

router.post(
  "/api/matches",
  [isAuthenticatedMiddleware.check],
  [SchemaValidationMiddleware.verify(matchPayload)],
  MatchController.createMatch
);

router.get("/api/matches", MatchController.getAllMatches);
router.get("/api/matches/:match_id", MatchController.getMatchDetails);

module.exports = router;
