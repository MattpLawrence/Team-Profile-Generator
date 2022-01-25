const { builtinModules } = require("module");
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.role = "Engineer";
    this.gitHub = gitHub;
  }
  getRole() {
    return this.role;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
