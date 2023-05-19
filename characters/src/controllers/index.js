const { catchAsync } = require("../utils")

module.exports = {
    getCharacters: catchAsync(require("./getCharacters.js")),
    createCharacters: catchAsync(require("./createCharacters.js")),
}