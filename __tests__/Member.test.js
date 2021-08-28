const Member = require("../lib/Member");

const member = new Member("john", 1, "john@test.com");

test("Creates a Member object", () => {
    expect(member).toEqual(expect.any(Object));
});

test("Member object has a valid name", () => {
    expect(member.name).toBe("john");
    expect(member.getName()).toEqual(member.name);
});

test("Member object has a valid id", () => {
    expect(member.id).toBe(1);
    expect(member.getID()).toEqual(member.id);
});

test("Member object has a valid email", () => {
    expect(member.email).toBe("john@test.com");
    expect(member.getEmail()).toEqual(member.email);
});

test("Member object has a valid role", () => {
    expect(member.getRole()).toEqual("Member");
});