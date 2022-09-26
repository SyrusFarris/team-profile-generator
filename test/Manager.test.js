// using Manager Constructor
const Manager = require('../lib/Manager');

//creating manager object
test('creates an Manager object', () => {
    const manager = new Manager('Syrus', 30, 'syrusfarris@gmail.com', 111);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Syrus', 30, 'syrusfarris@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 