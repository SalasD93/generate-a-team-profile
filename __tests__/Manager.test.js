const Manager = require("../lib/Manager");

const manager = new Manager("john", 1, "john@test.com");

test("Creates a Manager object", () => {
    expect(manager).toEqual(expect.any(Object));
});

test("Manager object has a valid name", () => {
    expect(manager.name).toBe("john");
    expect(manager.getName()).toEqual(manager.name);
});

test("Manager object has a valid id", () => {
    expect(manager.id).toBe(1);
    expect(manager.getID()).toEqual(manager.id);
});

test("Manager object has a valid email", () => {
    expect(manager.email).toBe("john@test.com");
    expect(manager.getEmail()).toEqual(manager.email);
});

test("Manager object has a valid role", () => {
    expect(manager.getRole()).toEqual("Manager");
});