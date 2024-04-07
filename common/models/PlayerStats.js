const { DataTypes } = require("sequelize");

const PlayerModel = {
  player_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  matches_played: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  runs: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  average: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  strike_rate: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("player", PlayerModel, {
      timestamps: false, // Disable automatic timestamps
    });
  },
  create: (player) => {
    return this.model.create(player);
  },
  findByPk: (id) => {
    return this.model.findByPk(id);
  },
};
