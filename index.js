const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Team member's name:",
      name: "name",
    },
  ])
  .then((response) => {
    console.log(response);
  });
