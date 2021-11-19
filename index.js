const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./type/manager')
const Engineer = require('./type/engineer')
const Intern = require('./type/intern')
const Employee = require('./type/employee')


let team = []
let cardString = ''
let memberRole = ''

