// Employee Constructor

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // returning name from input
    getName () {
        return this.name;
    }

    //returning id from input
    getId () {
        return this.id;
    }

    // returning email from input
    getEmail () {
        return this.Email;
    }

    //returning employee type
    getRole () {
        return 'Employee';
    }
};

// to be exported
module.exports = Employee;