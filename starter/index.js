const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generateTeam = require("./src/page-template")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const newStaffArr = [];

// Team manager (user) prompts 

const managerInput = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter managers name',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter managers ID',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter managers email',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter managers office number',
                name: 'number',
            },
        ]).then(({ name, id, email, number }) => {
            const manager = new Manager(name, id, email, number);
            newStaffArr.push(manager)
            addTeamMembers()
        })
}

managerInput()

const createEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter engineers name',
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'Enter engineers ID',
                name: 'engineerID',
            },
            {
                type: 'input',
                message: 'Enter engineers email',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'Enter engineers GitHub username',
                name: 'engineerGithub',
            },
        ]).then(({ engineerName, engineerID, engineerEmail, engineerGithub }) => {
            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
            newStaffArr.push(engineer)
            addTeamMembers()
        })

}

const createIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter interns name',
                name: 'internName',
            },
            {
                type: 'input',
                message: 'Enter interns ID',
                name: 'internID',
            },
            {
                type: 'input',
                message: 'Enter interns email',
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'Enter interns school',
                name: 'internSchool',
            },
        ]).then(({ internName, internID, internEmail, internSchool }) => {
            const intern = new Intern(internName, internID, internEmail, internSchool);
            newStaffArr.push(intern)
            addTeamMembers()
        })

}

addTeamMembers = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'Would you like to add new members to the team?',
                name: 'addTeam',
                choices: ['Engineer', 'Intern', 'Finish building the team']
            },
        ).then((answers) => {
            switch (answers.addTeam) {
                case 'Engineer': {
                    createEngineer();
                    break;
                }
                case 'Intern': {
                    createIntern();
                    break;
                }
                default: generateHTML();
                    break;
            };

        });
};

let generateHTML = () => {
    fs.writeFileSync(outputPath, generateTeam(newStaffArr), 'utf-8')
}