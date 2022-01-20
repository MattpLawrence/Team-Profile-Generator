const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, role, gitHub) {
    const gitHub = gitHub;
    getGitHub();
    getRole();
    super(gitHub);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
}
