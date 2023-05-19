const mongoose = require("mongoose");
const { MONGO_URI } = require("../../src/config/envs");

// Ace se crea la conexion de la base de datos
const conn = mongoose.createConnection(MONGO_URI)

//Defino el modelo
module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema")),
    Film: conn.model("Film", require("./schemas/filmsSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema"))
}