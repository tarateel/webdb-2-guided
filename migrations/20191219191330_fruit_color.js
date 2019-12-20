exports.up = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
    // we can use "string" for the data type of varchar instead of text.
    // allows us to specify a maximum string length.
    table.string("color", 128)
  })
}

exports.down = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
    // don't drop the table since it wasn't created in this migration,
    // just drop the column
    table.dropColumn("color")
  })
}
