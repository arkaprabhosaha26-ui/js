const student = {
    name: "Raj",
    age: 20,
    rollNo: 101,
    course: "CSE"
};

console.log(student);
//1.ADDING
student.city="kolkata";
//2.UPDATING
student.age=21;
console.log(student);
//3.delete
delete student.rollNo;
console.log(student);

//nested objects
const student1={
  myName:"raj",
  age:19,
  address:{
    city:"kolkata",
    state:"West Bengal",
    pincode:700056
  }
}
console.log(student1)
//accesing nested object
console.log(student1.address.city)
console.log(student1.address.state)
console.log(student1.address.pincode)
//or
//console.log(student1["address"]["city"]);


//4.updating nested object
student1.address.city="delhi";
console.log(student1);
//5.adding prop in nested object
student1.address.country="india";
console.log(student1)

//multiple level objects
const student3={
  name3:"Arka",
  address3:{
    location:{
      city:"kolkata",
      area:"Belgharia"
    }
  }
}

console.log(student3.address3.location.city) //kolkata
console.log(student3.address3.location.area) //belgharia



