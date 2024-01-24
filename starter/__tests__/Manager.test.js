// My Attempt
const Manager = require("../lib/Manager");

test("create an office number.", () => {
  const testOfficeNumber = 1;
  const employeeInstance = new Manager("Carl Jonson", 1, "carljonson@yahoo.com", testOfficeNumber);
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
  const testOfficeNumber = 1;
  const employeeInstance = new Manager("Carl Jonson", 1, "carljonson@yahoo.com", testOfficeNumber);
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Carl Jonson", 1, "carljonson@yahoo.com", 2);
  expect(employeeInstance.getRole()).toBe(returnValue);
});