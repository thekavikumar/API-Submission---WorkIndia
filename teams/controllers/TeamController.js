const TeamModel = require("../../common/models/Team");
const PlayerModel = require("../../common/models/Player");

module.exports = {
  addToSquad: async (req, res) => {
    const { team_id } = req.params;
    try {
      // Create the player first
      const player = await PlayerModel.create(req.body);
      const team = await TeamModel.findByPk(team_id);
      const updatedSquad = [...team.squad, player];
      await TeamModel.update({ squad: updatedSquad }, { where: { team_id } });

      return res.status(200).json({
        message: "Player added to the squad successfully",
        player_id: player.player_id,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  createTeam: async (req, res) => {
    try {
      const team = await TeamModel.create(req.body);
      return res.status(200).json({ team_id: team.team_id });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
