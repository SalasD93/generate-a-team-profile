// These are the required modules/packages
const Member = require("./Member");
// This class constructs the Managers
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

module.exports = Manager;