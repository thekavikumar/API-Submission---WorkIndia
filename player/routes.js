const router = require("express").Router();

// Controller Imports
const PlayerController = require("./controllers/PlayerController");

router.get("/api/players/:player_id/stats", PlayerController.getPlayerStats);

router.post("/api/players", PlayerController.create);

module.exports = router;
