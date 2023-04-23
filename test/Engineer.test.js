const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const github = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", github);
  expect(e.github).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
  const getRole = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(getRole);
});

test("Can get GitHub username via getGithub()", () => {
  const getGithub = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", getGithub);
  expect(e.getGithub()).toBe(getGithub);
});
