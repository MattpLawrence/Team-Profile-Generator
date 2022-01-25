const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  //check to see if passing in a name attributes sets the attribute
  describe("Create engineer github", () => {
    it("Should return an object containing a 'github' property.", () => {
      const obj = new Engineer("", "", "", "MattPLawrence");
      expect(obj.gitHub).toEqual("MattPLawrence");
    });
  });
});
