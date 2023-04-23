const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", school);
  expect(e.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const getRole = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(getRole);
});

test("Can get school via getSchool()", () => {
  const getSchool = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", getSchool);
  expect(e.getSchool()).toBe(getSchool);
});
