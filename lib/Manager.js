//importing Employee constructor
const Employee = require('./Employee');

//manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //calling employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // setting employee role to Manager
    getRole () {
        return "Manager";
    }
}

// export Location
module.exports = Manager;