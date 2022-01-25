const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const { get } = require("lodash");
let memberArray = [];

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
        getManager(response);
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
//check to see if a character should be created
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
      } else {
        createFinalContent();
        return;
      }
    });
}
//create new manager
function getManager(firstResponse) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((mngResponse) => {
      const newManager = new Manager(
        firstResponse.name,
        firstResponse.id,
        firstResponse.email,
        mngResponse.officeNumber
      );
      console.log(newManager);
      console.log(newManager.getRole());
      memberArray.push(newManager);
      init();
    });
}
//create new engineer
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
      console.log(newEngineer.getHTML());
      memberArray.push(newEngineer);
      init();
    });
}
//create new intern
function getIntern(firstResponse) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Intern's school?",
        name: "school",
      },
    ])
    .then((stdResponse) => {
      const newIntern = new Intern(
        firstResponse.name,
        firstResponse.id,
        firstResponse.email,
        stdResponse.school
      );
      console.log(newIntern);
      console.log(newIntern.getRole());
      memberArray.push(newIntern);
      console.log(` role: ${memberArray[0].role}`);
      init();
    });
}
//write html doc
createWebPage = (finalString) => {
  fs.writeFile("index.html", finalString, function (err) {
    if (err) throw err;
    console.log("Generated");
  });
};

function createFinalContent() {
  //sort each type of member into their own array
  let arrManager = [];
  let arrEngineer = [];
  let arrIntern = [];

  memberArray.forEach((mem) => {
    console.log(mem.role);
    if (mem.role === "Manager") {
      arrManager.push(mem.html);
    } else if (mem.role === "Engineer") {
      arrEngineer.push(mem.html);
    } else if (mem.role === "Intern") {
      arrIntern.push(mem.html);
    } else {
      console.log(`${mem.name} has an invalid role.`);
    }
  });
  // combine all three arrays, now members are in order from managers, to engineers, to interns.
  const arrFinal = arrManager.concat(arrEngineer, arrIntern);
  console.log(arrFinal);
  let finalString = arrFinal.join();
  console.log(finalString);
}
