const db = require("../Database");
const question = require("../../utils/prompt");

async function switchList(currentList = "tasks") {
    const tables = db
        .prepare(
            "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT GLOB 'sqlite_*' AND name NOT IN ('configs') ORDER BY name",
        )
        .all()
        .map((row) => row.name);

    if (!tables.length) {
        console.log("No lists available.");
        return currentList;
    }

    console.log("Available lists:");
    tables.forEach((table, index) => {
        const current = table === currentList ? " (current)" : "";
        console.log(`${index + 1}. ${table}${current}`);
    });

    const answer = await question("Enter list number or list name: ");
    if (!answer) {
        console.log("No selection made. Staying on current list.");
        return currentList;
    }

    const input = answer.trim();
    let chosen = null;

    if (/^\d+$/.test(input)) {
        const idx = Number(input) - 1;
        chosen = tables[idx];
    } else {
        chosen = tables.find(
            (table) => table.toLowerCase() === input.toLowerCase(),
        );
    }

    if (!chosen) {
        console.log("Invalid list selected. Staying on current list.");
        return currentList;
    }

    console.log(`Switched to list: ${chosen}`);
    return chosen;
}

module.exports = switchList;
