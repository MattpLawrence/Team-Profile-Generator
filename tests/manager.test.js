const Manager = require("../lib/manager");

describe("Manager", () => {
  //check to see if passing in a name attributes sets the attribute
  describe("Create Manager Office Number", () => {
    it("Should return an object containing a 'officeNumber' property.", () => {
      const obj = new Manager("", "", "", 22);
      expect(obj.officeNumber).toEqual(22);
    });
  });
});
