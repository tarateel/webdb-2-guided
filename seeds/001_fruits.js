// Seed data, or test/sample data, are really useful for testing.
// We can run the seeds to reset all the data in a DB back to it's initial state.
exports.seed = async function(knex) {
  // clears out all of our existing data so we can reset.
  // we call .truncate instead of .del because we also want to reset the autoincrementing index.
  await knex("fruits").truncate()

  // create a bunch of rows at once with an array of objects
  await knex("fruits").insert([
    { name: "dragonfruit", avgWeightOz: 16.7, delicious: true, color: "red" },
    { name: "strawberry", avgWeightOz: 0.42, delicious: true, color: "red" },
    { name: "banana", avgWeightOz: 4.0, delicious: true, color: "yellow" },
    { name: "noni", avgWeightOz: 1.0, delicious: false, color: "white" },
  ])
}
