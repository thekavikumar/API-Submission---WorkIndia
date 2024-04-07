const { DataTypes } = require("sequelize");

const TeamModel = {
  team_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  squad: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [], // Default value is an empty array
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
  findByPk: (id) => {
    return this.model.findByPk(id);
  },
  update: (data, options) => {
    return this.model.update(data, options);
  },
};
