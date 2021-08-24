const inquirer = require("inquirer");
const Member = require("./Member");

class Manager extends Member {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getOfficeNumber() {
        return this.office;
    }
    getRole() {
        return "Manager";
    }
    createManager() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the manager's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the manager's ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the manager's email."
            },
            {
                type: "input",
                name: "office",
                message: "Please enter the manager's office number."
            }
        ])
        .then(answers => {
            console.log(new Manager(answers.name, answers.id, answers.email, answers.office));
        })
    }
}

// new Manager().createManager();

module.exports = Manager;