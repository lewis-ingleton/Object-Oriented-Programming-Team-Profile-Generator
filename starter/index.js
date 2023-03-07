const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const newStaffArr = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Are you a manager?',
            name: 'managerConfirm',
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'number',
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'list',
            message: 'Would you like to add new members to the team?',
            name: 'addTeam',
            choices: ['Manager', 'Engineer', 'Finish building the team']
        },

    ]);