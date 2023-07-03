const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
  mongoose,
  url: dbConfig.url,
  loginadmin: require("./logadmin.model.js")(mongoose),
  admin: require("./dataadmin.model.js")(mongoose),
};
