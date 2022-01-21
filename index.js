const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const { get } = require("lodash");

function firstPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Team member's role:",
        name: "role",
        choices: ["Team Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "Team member's name:",
        name: "name",
      },
      {
        type: "input",
        message: "Team member's ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Team member's email:",
        name: "email",
      },
    ])
    .then((response) => {
      if (response.role === "Team Manager") {
        // getManager(response);
      } else if (response.role === "Engineer") {
        getEngineer(response);
      } else if (response.role === "Intern") {
        getIntern(response);
      } else {
        console.log("You must select a role.");
      }
    });
}
init();

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add a new team member?",
        name: "init",
        choices: ["Yes", "No"],
      },
    ])
    .then((response) => {
      if (response.init === "Yes") {
        firstPrompts();
      }
    });
}

function getEngineer(firstResponse) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Team member's github:",
        name: "github",
      },
    ])
    .then((engResponse) => {
      const newEngineer = new Engineer(
        firstResponse.name,
        firstResponse.id,
        firstResponse.email,
        engResponse.github
      );
      console.log(newEngineer);
      console.log(newEngineer.getRole());
    });
}
