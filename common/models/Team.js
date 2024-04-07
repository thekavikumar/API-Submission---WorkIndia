// TeamModel.js
const { DataTypes } = require("sequelize");

const TeamModel = {
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
    this.model = sequelize.define("team", TeamModel, {
      timestamps: false, // Disable automatic timestamps
    });
  },
  create: (data) => {
    return this.model.create(data);
  },
};
