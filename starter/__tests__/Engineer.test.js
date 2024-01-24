const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "Abraham Dalton";
  const employeeInstance = new Engineer("Abraham Dalton", 2, "abraham.dalton@yahoo.com", testGithub);
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "Abraham Dalton";
  const employeeInstance = new Engineer("Abraham Dalton", 2, "abraham.dalton@yahoo.com", testGithub);
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer("Abraham Dalton", 2, "abraham.dalton@yahoo.com", "Abraham Dalton");
  expect(employeeInstance.getRole()).toBe(returnValue);
});