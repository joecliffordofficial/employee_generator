const Engineer = require('../type/engineer')

describe('Engineer', () => {
    const name = 'Joseph'
    const id = '001'
    const email = 'joecliffordofficial@gmail.com'
    const github = 'joecliffordofficial'


    const employee = new Engineer(name, id, email, github)

    it('should return the engineer name', () => {
        expect(employee.getName()).toBe('Joseph');
    })

    it('should return the engineer id', () => {
        expect(employee.getID()).toBe('001');
    })

    it('should return the engineer email', () => {
        expect(employee.getEmail()).toBe('joecliffordofficial@gmail.com');
    })

    it('should return the engineer github', () => {
        expect(employee.getGitHub()).toBe('joecliffordofficial')
    })

    it('should return the enginer role', () => {
        expect(employee.getRole()).toBe('Engineer');
    })

   



})