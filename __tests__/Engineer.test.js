const Engineer = require("../lib/Engineer");

const engineer = new Engineer("john", 1, "john@test.com");

test("Creates an Engineer object", () => {
    expect(engineer).toEqual(expect.any(Object));
});

test("Engineer object has a valid name", () => {
    expect(engineer.name).toBe("john");
    expect(engineer.getName()).toEqual(engineer.name);
});

test("Engineer object has a valid id", () => {
    expect(engineer.id).toBe(1);
    expect(engineer.getID()).toEqual(engineer.id);
});

test("Engineer object has a valid email", () => {
    expect(engineer.email).toBe("john@test.com");
    expect(engineer.getEmail()).toEqual(engineer.email);
});

test("Engineer object has a valid role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
});