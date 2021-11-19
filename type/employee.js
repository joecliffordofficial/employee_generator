class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        console.log(`Name: ${this.name}`)
        return this.name
    }

    getID() {
        console.log(`Name: ${this.id}`)
        return this.id
    }

    getEmail() {
        console.log(`Name: ${this.email}`)
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee