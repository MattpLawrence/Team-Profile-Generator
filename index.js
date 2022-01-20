const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");

inquirer
  .prompt([
    {
      type: "input",
      message: "Team member's name:",
      name: "name",
    },
    {
      type: "list",
      message: "Team member's role:",
      name: "role",
      choices: ["Team Manager", "Engineer", "Intern"],
    },
  ])
  .then((response) => {
    let newEmployee = new Employee(response);
    console.log(response);
  });

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

// let destResponse = (response) => {
//   name = response.name;
//   role = response.role;
// };
