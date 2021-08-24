const inquirer = require("inquirer");
const Member = require("./Member");

class Intern extends Member {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    returnRole() {
        return "Intern";
    }
    createIntern() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter the intern's name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the intern's ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the intern's email."
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school."
            }
        ])
        .then(answers => {
            console.log(new Intern(answers.name, answers.id, answers.email, answers.school));
        });
    }
}

module.exports = Intern;