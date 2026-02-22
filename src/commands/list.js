const db = require("../Database"); // CommonJS
const chalk = require("chalk");

function list() {
    const stmt = db.prepare(`
        SELECT * FROM tasks ORDER BY created_at DESC
    `);

    const tasks = stmt.all();

    if (tasks.length == 0) {
        console.log(chalk.bgRed("             No Tasks !\n\n"));
    } else {
        tasks.forEach((task) => {
            if (task.done == 0) {
                console.log(`${task.id} [ ] ${chalk.blueBright(task.title)}`);
            } else {
                console.log(
                    `${task.id} [X] ${chalk.greenBright.strikethrough(task.title)}`,
                );
            }
        });
    }
}

module.exports = list; // CommonJS

// export default -> ES Modules
// import ... from arquivo // ES Modules
