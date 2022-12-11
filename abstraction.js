const family = require("./index");

let house = new family.House("Rose",2010,[]);           //the details of house
house.addResident(new family.Person("Perera", 20));     //add the persons of the house
console.log(house.getResident());                //get the persons of house