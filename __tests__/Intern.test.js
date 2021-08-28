const Intern = require("../lib/Intern");

const intern = new Intern("john", 1, "john@test.com");

test("Creates an Intern object", () => {
    expect(intern).toEqual(expect.any(Object));
});

test("Intern object has a valid name", () => {
    expect(intern.name).toBe("john");
    expect(intern.getName()).toEqual(intern.name);
});

test("Intern object has a valid id", () => {
    expect(intern.id).toBe(1);
    expect(intern.getID()).toEqual(intern.id);
});

test("Intern object has a valid email", () => {
    expect(intern.email).toBe("john@test.com");
    expect(intern.getEmail()).toEqual(intern.email);
});

test("Intern object has a valid role", () => {
    expect(intern.getRole()).toEqual("Intern");
});