const { builtinModules } = require("module");
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.role = "Manager";
    this.gitHub = gitHub;
  }
  getRole() {
    return this.role;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
