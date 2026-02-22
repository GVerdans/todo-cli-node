const commands = require("../commands");
const { mainMenu } = require("../ui/menus"); // UI
const question = require("../../utils/prompt");

async function menu() {
    console.clear();
    while (true) {
        mainMenu();
        commands.list();

        const opcao = await question("Select an option: \n\n");

        switch (opcao) {
            case "1":
                console.clear();
                await commands.add();
                break;
            case "2":
                console.clear();
                commands.list();
                await commands.remove();
                break;

            case "3":
                console.clear();
                commands.list();
                await commands.done();
                break;

            case "4":
                console.clear();
                await commands.removeAll();
                break;

            case "5":
                console.clear();
                await commands.removeAll();
                break;

            case "0":
                console.clear();
                console.log("Bye !");
                process.exit();

            default:
                console.clear();
                console.log("Invalid Option !");
                break;
        }
    }
}

module.exports = menu;
