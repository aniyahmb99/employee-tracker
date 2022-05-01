const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_tracker",
});

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "task_todo",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Update an Employee Role",
      ],
    },
    {
      type: "input",
      message: "What is the name of your department?",
      name: "add_Department",
      when: (answers) => {
        if (answers.task_todo == "Add Department") {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is the name of your role?",
      name: "add_Role",
      when: (answers) => {
        if (answers.task_todo == "Add Role") {
          return true;
        } else {
          return false;
        }
      },
    },
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    switch (answers.task_todo) {
      case "Add Department":
        console.log(answers.name);
        break;

      case "Add Role":
        console.log(answers.name);
        break;

      case "Add Employee":
        console.log(answers.name);
        break;

      case "Remove Employees":
        console.log(answers.name);
        break;

      case "Update Employee Role":
        console.log(answers.name);
        break;
      case "View Employees":
        console.log(answers.name);
        break;
      default:
        console.log("Sorry, something went wrong");
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
