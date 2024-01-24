const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof (employeeInstance)).toBe("object");
})

test("Testing name.", () => {
  const name = "Jack Moore";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
  const id = 6;
  const employeeInstance = new Employee("Jack Moore", id);
  expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
  const email = "jackmoore.com";
  const employeeInstance = new Employee("Jack Moore", 6, email);
  expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
  const testName = "Jack Moore";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
  const testID = 6;
  const employeeInstance = new Employee("Jack Moore", testID);
  expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
  const testEmail = "jackmoore@yahoo.com";
  const employeeInstance = new Employee("Jack Moore", 6, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Jack Moore", 6, "jackmoore@yahoo.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
})