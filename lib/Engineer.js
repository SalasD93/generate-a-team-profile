const inquirer = require("inquirer");
const Member = require("./Member");

class Engineer extends Member {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    gitUsername() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
    createEngineer() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the engineer's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the engineer's ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the engineer's email."
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the engineer's GitHub username."
            }
        ])
        .then(answers => {
            console.log(new Engineer(answers.name, answers.id, answers.email, answers.github));
        });
    }
}
// new Engineer().createEngineer();
module.exports = Engineer;