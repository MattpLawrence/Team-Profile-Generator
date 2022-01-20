const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, role, school) {
    const school = school;
    getSchool();
    getRole();
    super(school);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
}
