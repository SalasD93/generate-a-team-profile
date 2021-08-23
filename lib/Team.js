const Member = require("../utils/Member");

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
}

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
}

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
}

module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;