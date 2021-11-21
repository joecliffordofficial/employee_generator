const Intern = require('../type/intern')

describe('Intern', () => {
    const name = 'Joseph'
    const id = '001'
    const email = 'joecliffordofficial@gmail.com'
    const school = 'UW'


    const employee = new Intern(name, id, email, school)

    it('should return the intern name', () => {
        expect(employee.getName()).toBe('Joseph');
    })

    it('should return the intern id', () => {
        expect(employee.getID()).toBe('001');
    })

    it('should return the intern email', () => {
        expect(employee.getEmail()).toBe('joecliffordofficial@gmail.com');
    })

    it('should return the intern role', () => {
        expect(employee.getRole()).toBe('Intern');
    })

    it('should return the intern school', () => {
        expect(employee.getSchool()).toBe('UW')
    })



})