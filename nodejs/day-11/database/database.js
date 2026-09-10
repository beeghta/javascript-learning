import Database from "better-sqlite3";

const dbPath =
    process.env.NODE_ENV === "test"
        ? "./database/test.db"
        : "./database/neuron.db";

const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS neurons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        activity REAL NOT NULL
    )
`);

export default db;