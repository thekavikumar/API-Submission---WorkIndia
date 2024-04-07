const { DataTypes } = require("sequelize");

const MatchModel = {
  match_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  team_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("match", MatchModel, {
      timestamps: false, // Disable automatic timestamps
    });
  },
  create: (data) => {
    return this.model.create(data);
  },
  findAll: () => {
    return this.model.findAll();
  },
  findByPk: (id) => {
    return this.model.findByPk(id);
  },
};
