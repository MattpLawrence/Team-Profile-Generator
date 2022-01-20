const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    const officeNumber = officeNumber;
    getRole();
    super(officeNumber);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
}
