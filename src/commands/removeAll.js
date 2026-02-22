const db = require("../Database");
const chalk = require("chalk");
const question = require("../../utils/prompt");

async function removeAll() {
    const resp = await question("Are you Sure to Delete All ? ( y / n ) ");

    if (resp === "n") return;

    db.prepare(
        `
        DELETE FROM tasks WHERE id > 0`,
    ).run();

    return console.log(chalk.bgRed(`All tasks Removed !`));
}

module.exports = removeAll;
