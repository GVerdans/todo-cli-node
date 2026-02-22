const DataBase = require("better-sqlite3");
const path = require("path");
const dbPath = path.resolve(__dirname, "../../data/todo.db");

const db = new DataBase(dbPath);

function init() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            done INTEGER DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
}

init();

module.exports = db;
