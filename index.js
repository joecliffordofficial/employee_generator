const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./type/manager')
const Engineer = require('./type/engineer')
const Intern = require('./type/intern')
const Employee = require('./type/employee')
const { response } = require('express')
const { init } = require('cjs-module-lexer')


let team = []
let cardString = ''
let memberRole = ''

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the office manager?',
        name: 'name',
        validate: (response) => {
            if (!response) {
                return console.log("This field is required.")
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'What is the employee ID for the office manager?',
        name: 'id',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'What is the email address for the office manager?',
        name: 'email',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input', 
        message: 'What is the office number for the manager?',
        name: 'officeNum',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the name for the engineer?',
        name: 'name',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the ID of the engineer?',
        name: 'id',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'What is the email for the engineer?',
        name: 'email',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'What is the GitHub for the engineer?',
        name: 'github',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'What is the ID for the intern?',
        name: 'id',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'What is the email for the intern?',
        name: 'email',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }, 
    {
        type: 'input',
        message: 'Where does the intern go to school?',
        name: 'school',
        validate: (response) => {
            if (!response) {
                console.log('This field is required.')
            } else {
                return true
            }
        }
    }
]

const addAnother = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'addAnother'
        }
    ]).then((response) => {
        console.log(response)
        if (response.addAnother == true) {
            employeeType()
        } else {
            console.log(team)
            createCards(team)
            writeToFile('yourHTML.html', generateHtml(cardString))
        }
    })
}

const employeeType = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of employee is this?',
            choices: ['Engineer', 'Intern', 'Cancel'],
            name: 'type'
        }
    ]).then((response) => {
        if (response.type === 'Engineer') {
            engineerQuestions()
        } else if (response.type === 'Intern') {
            internQuestions()
        } else {
            console.log(team)
            createCards(team)
            writeToFile('yourHTML.html', generateHtml(cardString))
        }
    })
}

const engineerQs = () => {
    inquirer.prompt(engineerQuestions).then((answers) => {
        var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        addAnother()
    })
}

const internQs = () => {
    inquirer.prompt(internQuestions).then((answers) => {
        var intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        addAnother()
    })
}

const managerQs = () => {
    inquirer.prompt(managerQuestions).then((answers) => {
        var manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        team.push(manager)
        addAnother()
    })
}

const createCards = (team) => {
    let cards = []
    team.forEach((member) => {
        console.log(member.getRole())
        switch (member.getRole()) {
            case 'Manager':
                memberRole = `Office ${member.office}`
                break
            case 'Engineer': 
                memberRole = `GitHub: ${member.github}`
                break
            case 'Intern' :
                memberRole = `School: ${member.school}`
                break
        }
        let memberCard = `<div class = 'card col-lg-3 m-2 shadow'><h1 class = 'card-header bg-info'>${member.name}</h1><h3>${member.getRole()}</h3><h3>${member.id}</h3><h3>${member.email}</h3><h3>${memberRole}</h3></div>`
    })
    cardString = cards.join("")
    console.log(cardString)
    return cardString
}




function init() {
    managerQs()
}

init()