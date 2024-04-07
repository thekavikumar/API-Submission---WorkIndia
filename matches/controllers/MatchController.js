const MatchModel = require("./../../common/models/Match");

module.exports = {
  createMatch: (req, res) => {
    MatchModel.create(req.body)
      .then((match) => {
        return res.status(201).json({
          message: "Match Created Successfully",
          match_id: match.match_id,
        });
      })
      .catch((error) => {
        return res.status(400).json({ error: error.message });
      });
  },

  getAllMatches: (req, res) => {
    MatchModel.findAll().then((matches) => {
      return res.status(200).json({ matches: matches });
    });
  },

  getMatchDetails: async (req, res) => {
    try {
      const { match_id } = req.params;
      const match = await MatchModel.findByPk(match_id);
      if (!match) {
        return res.status(404).json({ error: "Match not found" });
      }
      // Fetch squads or any additional data related to the match
      // Assuming squads are stored in a separate model or fetched from another source
      const squads = await fetchSquadsForMatch(match_id);
      const matchDetails = {
        match_id: match.id,
        team_1: match.team_1,
        team_2: match.team_2,
        date: match.date,
        venue: match.venue,
        status: match.status,
        squads: squads, // Assuming squads are fetched separately
      };
      return res.status(200).json(matchDetails);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

async function fetchSquadsForMatch(matchId) {
  // Dummy implementation - Fetch squads from database or any other source
  return [
    {
      team_1: [
        { player_id: "123", name: "Virat Kohli" },
        { player_id: "456", name: "Jasprit Bumrah" },
      ],
    },
  ];
}
