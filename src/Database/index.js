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

function newList(nomeTable) {
    if (!nomeTable || !/^[A-Za-z0-9_]+$/.test(nomeTable)) {
        throw new Error("Invalid list name");
    }

    db.exec(`CREATE TABLE IF NOT EXISTS ${nomeTable} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        done INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `);
}

db.newList = newList;

init();

module.exports = db;
