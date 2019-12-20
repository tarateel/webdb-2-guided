module.exports = {
  development: {
    client: "sqlite3", // our DBMS driver
    useNullAsDefault: true, // necessary when using SQLite
    connection: { // the location of our DB
      filename: "./produce.db3",
    },
  },
}
