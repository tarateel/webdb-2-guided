exports.up = async function(knex) {
  // Since these migration files get run through the Knex CLI,
  // the "knex" parameter is already instantiated and connected to our DB

  // translates to `CREATE TABLE (...);`
  await knex.schema.createTable("fruits", (table) => {
    // translates to `"id" INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT`
    table.increments("id")
    // translates to `"name" NOT NULL UNIQUE`
    table.text("name").notNull().unique()
    // translates to `"avgWeightOz" FLOAT`
    table.float("avgWeightOz")
    // translates to `"delicious" BOOLEAN DEFAULT 0`
    table.boolean("delicious").defaultTo(false)
  })
}

// Our migrations should ALWAYS use "down" to
// reverse whatever happened in "up"
exports.down = async function(knex) {
  // translates to `DROP TABLE IF EXISTS "fruits";`
  await knex.schema.dropTableIfExists("fruits")
}
