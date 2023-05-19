const Characters = require("../data");
const { response } = require("../utils");
const axios = require("axios")

module.exports = async (req, res) => {
    const characters = await Characters.list();
    response(res, 200, characters)
}