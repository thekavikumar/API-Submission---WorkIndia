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
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("players", PlayerModel, {
      timestamps: false, // Disable automatic timestamps
    });
  },
  create: (player) => {
    return this.model.create(player);
  },
};
