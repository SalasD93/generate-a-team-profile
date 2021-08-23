const inquirer = require("inquirer");
// const questions = require("./questions");
const {Manager, Engineer, Intern} = require("../lib/Team.js");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
const {managerQs, engineerQs, internQs} = require("./questions.js");

class Member {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        // this.office = office;
        // this.manager = false;
        // this.github = github;
        // this.engineer = false;
        // this.school = school;
        // this.intern = false;
    }

    initializeApp() {
        inquirer
            .prompt(
                {
                    type: "list",
                    name: "members",
                    message: "Would you like to add a team manager, engineer, or intern?",
                    choices: ["Team Manager", "Engineer", "Intern", "Build Team",],
                },
            )
            .then(({memberslist}) => {
                switch (memberslist.choices) {
                    case "Team Manager":
                        return true;
                        createManager();
                        break;
                    case "Engineer":
                        return true;
                        createEngineer();
                        break;
                    case "Intern":
                        return true;
                        createIntern();
                        break;
                    case "Build Team":
                        return true;
                        createTeam();
                        break;
                }
                // if (memberslist === "Team Manager") {
                //     console.log("Manager");
                //     return this.manager = true;
                //     // createManager();
                // } else if (memberslist === "Engineer") {
                //     console.log("Engineer");
                //     return this.engineer = true;
                //     // createEngineer();
                // } else if (memberslist === "Intern") {
                //     console.log("Intern");
                //     return this.intern = true;
                //     // createIntern();
                // } else if (memberslist === "none") {
                //     console.log("none");
                //     return false;
                //     // createTeam();
                // }
            });
    }
    createManager() {
        inquirer
            .prompt(managerQs)
            .then(answers => {
                const manager = new Member(answers)
            })
    }
}

module.exports = Member;