const { builtinModules } = require("module");
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.role = "Intern";
    this.gitHub = gitHub;
  }
  getRole() {
    return this.role;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
