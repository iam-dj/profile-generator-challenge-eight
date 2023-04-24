const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHtml = require("./util/generateHtml");

const employees = [];

function promptEmployee() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addEmployee",
        message: "Do you want to add an employee?",
      },
    ])
    .then((answer) => {
      if (answer.addEmployee) {
        promptEmployeeType();
      } else {
        fs.writeFile("index.html", generateHtml(employees), (err, data) => {
          if (err) {
            throw err;
          }
          console.log("complete!");
        });
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
function promptEmployeeType() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Select an employee type:",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answer) => {
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
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      employees.push(manager);
      promptEmployee();
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
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );

      employees.push(engineer);
      promptEmployee();
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
        name: "email",
        message: "Enter the interns's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school name:",
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
      promptEmployee();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

promptEmployee();
