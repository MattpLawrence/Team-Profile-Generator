const { builtinModules } = require("module");
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
    this.html = `
    <div class="card employeeCard">
    <div class="card-header">
      <h2 class="card-title">${this.role}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.role}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${this.Id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">Office Number: ${this.officeNumber}</li>
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
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
