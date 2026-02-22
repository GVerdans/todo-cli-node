const chalk = require("chalk");

function mainMenu() {
    console.log(
        chalk.cyanBright(`
                    ===============================
                    |       TODO LIST CLI         |
                    ===============================
                    |       Select an Option !    |
                    ===============================
                    | 1. Add Task                 |
                    | 2. Delete Task              |
                    | 3. (Un)Complete Task        |
                    |                             |
                    | 4. Remove All               |
                    |                             |
                    ===============================
                    | 0. Exit                     |
                    ===============================
                    `),
    );
}

module.exports = {
    mainMenu,
};
