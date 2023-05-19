const { catchAsync } = require("../utils")

module.exports = {
    getPlanets: catchAsync(require("./getPlanets.js")),
    createPlanets: catchAsync(require("./createPlanets.js"))
}