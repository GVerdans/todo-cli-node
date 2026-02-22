const readline = require("readline");

function question(texto) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            rl.close();
            resolve(resposta.trim());
        });
    });
}

module.exports = question;
