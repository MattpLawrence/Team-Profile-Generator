const { builtinModules } = require("module");
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
    this.html = `
    <div class="card employeeCard">
    <div class="card-header">
      <h2 class="card-title">${this.role}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.role}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${this.Id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">School: ${this.school}</li>
      </ul>
    </div>
  </div>`;
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
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
