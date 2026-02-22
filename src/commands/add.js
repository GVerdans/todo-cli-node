const db = require("../Database"); // CommonJS
const readline = require("readline"); // CommonJS

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

async function addTask(task) {
    try {
        if (!task) {
            task = await question("Digite a task: \n");
        }

        if (!task) {
            console.log("Tarefa inválida !");
            return;
        }

        const stmt = db.prepare(
            `
            INSERT INTO tasks (title)
            VALUES (?)
            `,
        );

        const result = stmt.run(task);
        console.log(`Task: ${task}, criada !`);
    } catch (err) {
        console.log(`Erro ao criar task: `, err.message);
    }
}
module.exports = addTask; // CommonJS

// export default -> ES Modules
// import ... from arquivo // ES Modules
