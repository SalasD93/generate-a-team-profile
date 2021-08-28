// These are the required modules/packages
const Member = require("./Member");
// This class constructs the Interns
class Intern extends Member {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;