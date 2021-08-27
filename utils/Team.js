// These are the required modules/packages
const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = require("../utils/generateHTML");
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
            console.log(answers.members);
            if (answers.members === "Build Team") {
                console.log(answers.members)
                console.log(this.teamMembers)
                // generateHTML()
            } else {
                console.log(answers.members)
                this.teamMembers.push(answers);
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
// initializeApp();
module.exports = Team;