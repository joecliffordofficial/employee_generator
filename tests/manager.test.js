const Manager = require('../type/manager')

describe('Manager', () => {
    const name = 'Joseph'
    const id = '001'
    const email = 'joecliffordofficial@gmail.com'
    const office = '1313'


    const employee = new Manager(name, id, email, office)

    it('should return the Manager name', () => {
        expect(employee.getName()).toBe('Joseph');
    })

    it('should return the Manager id', () => {
        expect(employee.getID()).toBe('001');
    })

    it('should return the Manager email', () => {
        expect(employee.getEmail()).toBe('joecliffordofficial@gmail.com');
    })

    it('should return the Manager role', () => {
        expect(employee.getRole()).toBe('Manager');
    })

    it('shoule return the Manager office', () => {
        expect(employee.getOffice()).toBe('1313')
    })


})