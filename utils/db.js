const knex = require("knex")
const config = require("../knexfile")

// Instantiate our knex instance and
// connect to our Database (a local file in this case)
const db = knex(config.development)

module.exports = db