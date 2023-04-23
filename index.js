const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const employees = [];

function promptEmployeeType() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add an employee?",
      },
      {
        type: "list",
        name: "employeeType",
        message: "Select an employee type:",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.addEmployee) {
        switch (answer.employeeType) {
          case "Manager":
            promptManager();
            break;
          case "Engineer":
            promptEngineer();
            break;
          case "Intern":
            promptIntern();
            break;
          default:
            console.log("Invalid employee type");
            promptEmployeeType();
        }
      } else {
        console.log("Employees:", employees);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add another employee?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      employees.push(manager);

      if (answers.addEmployee) {
        promptEmployeeType();
      } else {
        console.log("Employees:", employees);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add another employee?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );

      employees.push(engineer);

      if (answers.addEmployee) {
        promptEmployeeType();
      } else {
        console.log("Employees:", employees);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school name:",
      },
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add another employee?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );

      employees.push(intern);

      if (answers.addEmployee) {
        promptEmployeeType();
      } else {
        console.log("Employees:", employees);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

promptEmployeeType();
