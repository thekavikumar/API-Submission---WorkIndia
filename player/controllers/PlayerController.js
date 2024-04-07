const PlayerModel = require("../../common/models/PlayerStats");

module.exports = {
  create: async (req, res) => {
    try {
      const player = await PlayerModel.create(req.body);
      return res.status(201).json(player);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getPlayerStats: async (req, res) => {
    try {
      const { player_id } = req.params;
      const player = await PlayerModel.findByPk(player_id);
      if (!player) {
        return res.status(404).json({ error: "Player not found" });
      }

      const responseData = {
        player_id: player_id,
        name: player.name,
        matches_played: player.matches_played,
        runs: player.runs,
        average: player.average,
        strike_rate: player.strike_rate,
      };

      // Send the dummy player data in the response
      return res.status(200).json(responseData);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
