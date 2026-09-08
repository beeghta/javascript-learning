import Database from "better-sqlite3";

const db = new Database("./database/neuron.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS neurons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        activity REAL NOT NULL
    )
`);

export default db;