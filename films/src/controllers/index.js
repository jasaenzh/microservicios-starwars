const { catchAsync } = require("../utils")

module.exports = {
    getFilms: catchAsync(require("./getFilms.js")),
    createFilms: catchAsync(require("./createFilms.js"))
}