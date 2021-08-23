const inquirer = require("inquirer");

class Member {
    constructor() {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.manager = false;
        this.github = github;
        this.engineer = false;
        this.school = school;
        this.intern = false;
    }

    initializeApp() {
        inquirer
            .prompt(
                {
                    type: "list",
                    name: "members",
                    message: "Would you like to add a team manager, engineer, or intern?",
                    choices: ["Team Manager", "Engineer", "Intern", "none",],
                },
            )
    }
}

module.exports = teamMember;