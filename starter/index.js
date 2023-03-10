const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateTeam = require("./src/page-template")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const newStaffArr = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Team manager (user) prompts 
inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Are you a manager?',
            name: 'managerConfirm',
        },
    ])


    .then((response) => {
        if (response.managerConfirm === false) {
            console.log('You must be a manager to use this terminal.')
        } else {
            inquirer.prompt([
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
                    message: 'Would you like to add new members to the team?',
                    name: 'addTeam',
                    choices: ['Engineer', 'Intern', 'Finish building the team']
                },
            ])
            
                .then((response) => {
                    if (response.addTeam == 'Engineer') {
                        inquirer.prompt([
                            {
                                type: 'input',
                                message: 'What is engineers name?',
                                name: 'engineerName',
                            },
                            {
                                type: 'input',
                                message: 'What is engineers ID?',
                                name: 'engineerID',
                            },
                            {
                                type: 'input',
                                message: 'What is engineers email?',
                                name: 'engineerEmail',
                            },
                            {
                                type: 'input',
                                message: 'What is enginners GitHub username?',
                                name: 'engineerGithub',
                            },
                        ])

                    } else if (response.addTeam == 'Intern') {
                        inquirer.prompt([
                            {
                                type: 'input',
                                message: 'What is interns name?',
                                name: 'internName',
                            },
                            {
                                type: 'input',
                                message: 'What is interns ID?',
                                name: 'internID',
                            },
                            {
                                type: 'input',
                                message: 'What is interns email?',
                                name: 'internEmail',
                            },
                            {
                                type: 'input',
                                message: 'What is the interns school?',
                                name: 'internSchool',
                            }
                        ])
                    } else if (response.addTeam === 'Finsh building the team') {
                        return ((response) => {
                            const HTMLgeneration = generateTeam(response);
                            console.log(response)
                            fs.writeFile(`team.html`, HTMLgeneration, (error) => error ? console.error(error) : console.log(`Success`)
                            );
                        })
                    }
                })
        }
    })


    // if user chooses 'Finish building team' >>> export file to html 
