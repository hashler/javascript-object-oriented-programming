class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getName = () => {
        return this.name;
    }

    getAge = () => {
        return this.age;
    }

    getId = () => {
        console.log(`My Id is ${this.name}${this.age}`);
    }
}


class House {

    constructor(address,price,residents){
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () => {
        return this.address;
    }

    getPrice = () => {
        return this.price;
    }

    getResident = () => {
        return this.residents;
    }

    addResident = (resident) => {
        this.residents.push(resident);
    }
    
}

module.exports = {
    Person,
    House
}