const Intern = require('../lib/Intern');

// creating intern object
test('creates and Intern object', () => {
    const intern = new Intern('Syrus', 30, 'syrusfarris@gmail.com', 'TXST');

    expect(intern.school) .toEqual(expect.any(String));
})

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Syrus', 30, 'syrusfarris@gmail.com', 'TXST');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Syrus', 30, 'syrusfarris@gmail.com', 'TXST');

    expect(intern.getRole()).toEqual("Intern");
}); 