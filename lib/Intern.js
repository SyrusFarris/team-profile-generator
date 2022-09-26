// importing employee constructor
const employee = require('./Employee');

//intern constructor extends employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email);

        this.school = school;
    }

    //returning school from inpout
    getSchool () {
        return this.school;
    }

    //returning employee role to intern
    getRole () {
        return "Intern";
    }
}

//export Location
module.exports = Intern;