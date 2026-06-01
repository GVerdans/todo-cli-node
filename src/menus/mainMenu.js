const commands = require("../commands");
const { mainMenu } = require("../ui/menus"); // UI
const question = require("../../utils/prompt");

let lista = null;
async function menu() {
    console.clear();
    if (!lista) {
        lista = "tasks";
    }

    while (true) {
        mainMenu();
        commands.list(lista);

        const opcao = await question("Select an option: \n\n");

        switch (opcao) {
            case "1":
                console.clear();
                await commands.add(undefined, lista);
                break;
            case "2":
                console.clear();
                commands.list(lista);
                await commands.remove(undefined, lista);
                break;

            case "3":
                console.clear();
                commands.list(lista);
                await commands.done(undefined, lista);
                break;

            case "4":
                console.clear();
                await commands.removeAll(lista);
                break;

            case "5":
                console.clear();
                await commands.createNewList();
                break;

            case "6":
                console.clear();
                lista = await commands.switchList(lista);
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
