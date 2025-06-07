#!/usr/bin/env node

import inquirer from 'inquirer';
import { validate } from 'uuid';

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
    }
}

menu();
