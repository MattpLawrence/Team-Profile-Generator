// set parent class employee

const { getgid } = require("process");
const { getSystemErrorName } = require("util");

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    getName();
    getID();
    getEmail();
    getRole();
  }
}

module.exports = Employee;
