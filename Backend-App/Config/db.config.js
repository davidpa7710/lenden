const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    url: process.env.DB_URI.replace('<password>', process.env.PASSWORD).replace('<database>', process.env.DB_NAME)
}
