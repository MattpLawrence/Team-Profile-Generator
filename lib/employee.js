// set parent class employee

// const { getgid } = require("process");
// const { getSystemErrorName } = require("util");

class Employee {
  constructor(response) {
    response.name = name;
    response.id = id;
    response.email = email;
    response.role = role;

    console.log(`Employee ${response}`);
    getName();
    getID();
    getEmail();

    getRole(){
      if (response.role === "Team Manager") {
        console.log(`getRole = Manager`);
      } else if (response.role === "Engineer") {
        console.log(`getRole = Engineer`);
      } else if (response.role === "Intern") {
        console.log(`getRole = Intern`);
      } else {
        console.log("You must select a role.");
      };
    };
}

module.exports = Employee;
