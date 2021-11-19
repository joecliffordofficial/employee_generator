const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.office = office
    }

    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.office
    }
}

module.exports = Manager