const db = require("../Database");
const chalk = require("chalk");
const question = require("../../utils/prompt");

async function remove(taskId) {
    if (!taskId) {
        taskId = await question("Enter the Task ID to Remove: ");
    }

    const task = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(taskId);

    if (!task) {
        console.log("Task not Found !");
        return;
    }

    db.prepare(
        `
        DELETE FROM tasks WHERE id = ?`,
    ).run(taskId);

    return console.log(chalk.bgRed(`Task: ${taskId} Removed !`));
}

module.exports = remove;
