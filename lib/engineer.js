const { builtinModules } = require("module");
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.role = "Engineer";
    this.gitHub = gitHub;
    this.html = `    <div class="card employeeCard">
    <div class="card-header">
      <h2 class="card-title">${this.role}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.role}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${this.Id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${this.gitHub}" target="_blank" rel="noopener">${this.gitHub}</a></li>
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
    return "Engineer";
  }
  getGitHub() {
    return this.gitHub;
  }
  getHTML() {
    return this.html;
  }
}

module.exports = Engineer;
