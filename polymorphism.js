const family = require("./index");

class Doctor extends family.Person{

    constructor(name,age,degree,hospital){
        super(name,age);
        this.degree = degree;
        this.hospital = hospital;
    }

    getDetails = () => {
        this.getId();
        return `My degree is ${this.degree} and I worked at ${this.hospital}`;
    }
}

var doctor = new Doctor("hashan",25,"MBBS","kegalle");
console.log(doctor.getDetails());