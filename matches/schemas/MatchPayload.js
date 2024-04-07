module.exports = {
  type: "object",
  properties: {
    team_1: {
      type: "string",
    },
    team_2: {
      type: "string",
    },
    date: {
      type: "string",
    },
    venue: {
      type: "string",
    },
  },
  required: ["team_1", "team_2", "date", "venue"],
  additionalProperties: false,
};
