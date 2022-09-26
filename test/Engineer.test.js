//using Engineer Constructor
const Engineer = require('../lib/Engineer');

// creating engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Syrus', 30, 'syrusfarris@gmail.com', 'syrusfarris4');

    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github vlaue', () => {
    const engineer =new Engineer('Syrus', 30, 'syrusfarris@gmail.com', 'syrusfarris4');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engnineer('Syrus', 30, 'syrusfarris@gmail.com', 'syrusfarris4');

    expect(engineer.getRole()).toEqual("Engineer");
});