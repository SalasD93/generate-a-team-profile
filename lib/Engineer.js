// These are the required modules/packages
const Member = require("./Member");
// This class constructs the Engineers
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

module.exports = Engineer;