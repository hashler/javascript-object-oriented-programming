const family = require("./index");

class Programmer extends family.Person{
    constructor(name,age,company,salary,language){
        super(name,age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    printStatement = () => {
        return `Hello! my name is ${this.getName()}.I work for ${this.company}`;
    }
}

let programmer = new Programmer("hashan",23,"wso2",15025,"english");
console.log(programmer.printStatement());

