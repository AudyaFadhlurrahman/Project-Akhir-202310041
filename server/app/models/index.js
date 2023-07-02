const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
  mongoose,
  url: dbConfig.url,
  admin: require("./dataadmin.model.js")(mongoose),
};
