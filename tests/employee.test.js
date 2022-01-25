const Employee = require("../lib/employee");

describe("Employee", () => {
  //check to see if passing in a name attributes sets the attribute
  describe("Create Employee name", () => {
    it("Should return an object containing a 'name' property.", () => {
      const obj = new Employee("Matt");
      expect(obj.name).toEqual("Matt");
    });
  });
  //check to see if passing in an id attributes sets the attribute
  describe("Create Employee id", () => {
    it("Should return an object containing a 'id' property.", () => {
      const obj = new Employee("", 22, "");
      expect(obj.id).toEqual(22);
    });
  });
  //check to see if passing in an email attributes sets the attribute
  describe("Create Employee email", () => {
    it("Should return an object containing a 'email' property.", () => {
      const obj = new Employee("", "", "myEmail@gmail.com");
      expect(obj.email).toEqual("myEmail@gmail.com");
    });
  });
});
