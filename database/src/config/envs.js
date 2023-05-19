require("dotenv").config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    PORT_SERVER: process.env.PORT_SERVER
}