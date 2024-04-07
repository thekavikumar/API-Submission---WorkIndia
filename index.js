const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");
const { port } = require("./config");

const app = express();
const PORT = process.env.PORT || port;

// Express Routes Import
const AuthorizationRoutes = require("./authorization/routes");
const MatchRoutes = require("./matches/routes");
const PlayerRoutes = require("./player/routes");
const TeamRoutes = require("./teams/routes");

const UserModel = require("./common/models/User");
const MatchModel = require("./common/models/Match");
const PlayerStatsModel = require("./common/models/PlayerStats");
const TeamModel = require("./common/models/Team");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize("assignment", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

UserModel.initialise(sequelize);
MatchModel.initialise(sequelize);
PlayerStatsModel.initialise(sequelize);
TeamModel.initialise(sequelize);

// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the database. It creates models as tables that do not exist in the DB.
sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");

    // Attaching the Authentication and User Routes to the app.
    app.use("/", AuthorizationRoutes);
    app.use("/", MatchRoutes);
    app.use("/", PlayerRoutes);
    app.use("/", TeamRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", port);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });
