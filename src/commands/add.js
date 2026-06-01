const db = require("../Database"); // CommonJS
const question = require("../../utils/prompt");

async function addTask(task, list = "tasks") {
    try {
        if (!task) {
            task = await question("Insert a task: \n");
        }

        if (!task) {
            console.log("Invalid Task !");
            return;
        }

        const stmt = db.prepare(
            `
            INSERT INTO ${list} (title)
            VALUES (?)
            `,
        );

        stmt.run(task);
        console.log(`Task: ${task}, Created !`);
    } catch (err) {
        console.log(`Error to create task: `, err.message);
    }
}
module.exports = addTask; // CommonJS

// export default -> ES Modules
// import ... from arquivo // ES Modules
