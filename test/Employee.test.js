const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const id = 100;
  const e = new Employee("Foo", id);
  expect(e.id).toBe(id);
});

test("Can set email via constructor argument", () => {
  const email = "test@test.com";
  const e = new Employee("Foo", 1, email);
  expect(e.email).toBe(email);
});

test("Can get name via getName()", () => {
  const getName = "Alice";
  const e = new Employee(getName);
  expect(e.getName()).toBe(getName);
});

test("Can get id via getId()", () => {
  const getId = 100;
  const e = new Employee("Foo", getId);
  expect(e.getId()).toBe(getId);
});

test("Can get email via getEmail()", () => {
  const getEmail = "test@test.com";
  const e = new Employee("Foo", 1, getEmail);
  expect(e.getEmail()).toBe(getEmail);
});

test("getRole() should return \"Employee\"", () => {
  const getRole = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(getRole);
});
