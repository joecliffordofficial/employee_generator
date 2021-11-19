const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./type/manager')
const Engineer = require('./type/engineer')
const Intern = require('./type/intern')
const Employee = require('./type/employee')
const { response } = require('express')


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
]