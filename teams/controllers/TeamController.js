const TeamModel = require("../../common/models/Team");

module.exports = {
  create: async (req, res) => {
    try {
      TeamModel.create(req.body).then((team) => {
        return res.status(200).json({
          message: "Player added to the squad",
          team_id: team.player_id,
        });
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
