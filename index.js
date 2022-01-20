const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    { type: "input", message: "Team member first name:", name: "firstName" },
    {
      type: "input",
      message: "Team member last name:",
      name: "lastName",
    },
  ])
  .then((response) => {
    console.log(response);
  });
