// These are the required modules/packages
const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const memberCards = require("../utils/generateHTML");
const Manager = require("../lib/Manager");
const Member = require("../lib/Member");

// This constructor creates the Team
class Team {
    constructor() {
        // This creates an array to hold the team members
        this.teamMembers = [];
    }
    // These questions form the team members
    questionPrompt() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "members",
                message: "Would you like to add a team manager, engineer, or intern?",
                choices: ["Team Manager", "Engineer", "Intern", "Build Team",],
            },            
            {
                type: "input",
                name: "name",
                message: "Please enter the team member's name.",
                when: (answers) => answers.members != "Build Team"
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the team member's ID.",
                when: (answers) => answers.members != "Build Team"
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the team member's email.",
                when: (answers) => answers.members != "Build Team"
            },
            {
                type: "input",
                name: "office",
                message: "Please enter the team member's office number.",
                when: (answers) => answers.members === "Team Manager"
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the team member's GitHub username.",
                when: (answers) => answers.members === "Engineer"
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the team member's school.",
                when: ( answers ) => answers.members === "Intern"
            }
        ])
        .then(( answers ) => {
            if (answers.members === "Build Team") {
                // This function creates the HTML with the constructor info when all the questions are answered
                memberCards(this.teamMembers);
            } else {
                // This lets the different answers for each member to be displayed accordingly
                let { name, id, email, ...rest } = answers;
                let extra = Object.entries(rest)[1][1];
                switch (answers.members) {
                    case 'Team Manager':
                        this.teamMembers.push(new Manager(name, id, email, extra));
                        break;
                    case 'Engineer':
                        this.teamMembers.push(new Engineer(name, id, email, extra));
                        break;
                    case 'Intern':
                        this.teamMembers.push(new Intern(name, id, email, extra));
                        break;
                }
                // This restarts the questions after each set is answered
                return this.questionPrompt();
            }
        })    
        .catch(err => {
            console.log(err);
        })
    }
    createTeam() {
        this.questionPrompt();
    }
}

module.exports = Team;