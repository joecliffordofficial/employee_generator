const Employee = require('../type/employee')

describe('Employee', () => {
    const name = 'Joseph'
    const id = '001'
    const email = 'joecliffordofficial@gmail.com'


    const employee = new Employee(name, id, email)

    it('should return the employee name', () => {
        expect(employee.getName()).toBe('Joseph')
    })

    it('should return the employee id', () => {
        expect(employee.getID()).toBe('001')
    })

    it('should return the employee email', () => {
        expect(employee.getEmail()).toBe('joecliffordofficial@gmail.com')
    })

    it('should return the employee role', () => {
        expect(employee.getRole()).toBe('Employee')
    })



})