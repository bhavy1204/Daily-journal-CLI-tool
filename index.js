// #!/usr/bin/env node

import inquirer from 'inquirer';

//utility functions 
function wait() {
    return new Promise(r => setTimeout(r, 2000));
}

//main menu
const menu = async () => {

    let exit = false;
    while (!exit) {
        let res = await inquirer.prompt([{
            type: "list",
            message: "Choose one",
            name: "choice",
            choices: [
                "1. Journal today",
                "2. see all entries",
                "3. Exit"
            ]
        }])
        if (res.choice === "3. Exit") {
            console.log("exiting");
            await wait();
            return;
        }
    }
}

menu();
