const inquirer = require("inquirer");
const fs = require("fs");

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
    getRole(response);
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
