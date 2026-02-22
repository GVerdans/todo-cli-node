const chalk = require("chalk");
const db = require("../Database");
const readline = require("readline");

function question(quest) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(quest, (resposta) => {
            rl.close();
            resolve(resposta.trim());
        });
    });
}

async function done(taskId) {
    if (!taskId) {
        taskId = await question("Enter the Task Id: ");
    }

    const task = db.prepare(`SELECT * FROM tasks WHERE id = ?`).get(taskId);

    if (!task) {
        console.log("Task not Found !");
        return;
    }

    const newStatus = task.done === 0 ? 1 : 0;

    db.prepare(
        `
        UPDATE tasks SET done = ?
        WHERE id = ?`,
    ).run(newStatus, taskId);

    return console.log(chalk.bgCyan.black(`Task (Un)Done !`));
}

module.exports = done;
