const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, role, officeNumber) {
    const officeNumber = officeNumber;
    let getRole = (response) => {
      if (response.role === "Team Manager") {
        console.log(`getRole = Manager`);
      } else if (response.role === "Engineer") {
        console.log(`getRole = Engineer`);
      } else if (response.role === "Intern") {
        console.log(`getRole = Intern`);
      } else {
        console.log("You must select a role.");
      }
    };
    super(officeNumber);
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
}
