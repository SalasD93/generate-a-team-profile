const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
// const questions = require("./questions");
// const {Manager, Engineer, Intern} = require("../lib/Team.js");
const Manager = require("../lib/Manager");
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
// const {createManager, engineerQs, internQs} = require("./questions");

class Team {
    constructor() {
        this.teamMembers = [];
        this.manager;
        this.engineer;
        this.intern;
    }

    createTeam() {
        inquirer
            .prompt(
                {
                    type: "list",
                    name: "members",
                    message: "Would you like to add a team manager, engineer, or intern?",
                    choices: ["Team Manager", "Engineer", "Intern", "Build Team",],
                },
            )
            .then(({members}) => {
                switch (members) {
                    case "Team Manager":
                        console.log("manager");
                        this.manager = new Manager();
                        this.manager.createManager();
                        break;
                    case "Engineer":
                        console.log("engineer");
                        this.engineer = new Engineer();                        
                        this.engineer.createEngineer();
                        break;
                    case "Intern":
                        console.log("Intern");
                        createIntern();
                        break;
                    case "Build Team":
                        console.log("Build Team");
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
            })
            .catch(err => {
                console.log(err);
            })
        }
        // createManager() {
        //     console.log(managerQs);
        //     inquirer
        //         .prompt(managerQs)
        //         // .then(answers => {
        //         //     const manager = new Member(answers)
        //         // })
        // }
}
// initializeApp();
module.exports = Team;