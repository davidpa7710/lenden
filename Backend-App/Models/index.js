const dbConfig = require("../Config/db.config.js")

const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const userModel = require('./user.model')(mongoose);

module.exports = {
  userModel,
  // add other models here
};
const db = {};
db.mongoose = mongoose
db.url = dbConfig.url
db.tutorials = require("./user.model.js")(mongoose)

module.exports = db
