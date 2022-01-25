const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Create Employee", () => {
    it("Should return an object containing a 'name' property.", () => {
      const obj = new Employee("Matt", "", "");
      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(false);
      expect("email" in obj).toEqual(false);
    });
  });
});
