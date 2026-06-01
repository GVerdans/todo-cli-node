const db = require("../Database");
const question = require("../../utils/prompt");

async function createNewList() {
    try {
        const nomeLista = await question("Qual o nome da nova lista ?? \n");

        if (!nomeLista) {
            console.log("Invalid list name !");
            return;
        }

        db.newList(nomeLista);
        console.log(`Lista criada: ${nomeLista}`);
    } catch (err) {
        console.log(err.message || err);
    }
}

module.exports = createNewList;
