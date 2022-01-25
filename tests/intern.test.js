const Intern = require("../lib/intern");

describe("Intern", () => {
  //check to see if passing in a name attributes sets the attribute
  describe("Create engineer github", () => {
    it("Should return an object containing a 'School' property.", () => {
      const obj = new Intern("", "", "", "Georgia Tech");
      expect(obj.school).toEqual("Georgia Tech");
    });
  });
});
