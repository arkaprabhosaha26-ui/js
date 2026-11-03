//1.Object.keys,values,entries
let student = {
    name: "Raj",
    age: 21,
    marks: 90
};

let result1 = Object.keys(student);
let result2=Object.values(student);
let result3=Object.entries(student);

console.log(result1); // ["name", "age", "marks"]
console.log(result2); //["Raj",21,90]
console.log(result3)

//2.object.assign
let obj1 = {
    name: "Raj"
};

let obj2 = {
    age: 21
};

let result = Object.assign(obj1, obj2);

console.log(result); //{ name: 'Raj', age: 21 }
console.log(obj1); //{ name: 'Raj', age: 21 }
console.log(obj2); //{age:21}

//b
let a = { x: 10 };
let b = { y: 20 };

let c = Object.assign(a, b);

a.x = 50; //matter bcz a and c are same objs
b.y=60; //does not matter since  b and c are  sep objs

console.log(c); //{ x: 50, y: 20 }
console.log(a); //{ x: 50, y: 20 }
console.log(b); //{ y: 60 }


//3.object.freeze and seal()
let details={
  gender:"male",
  age:20
}
Object.freeze(details);
details.gender="female";
delete details.age;
console.log(details);//{ gender: 'male', age: 20 }

//seal only modification is poss no deletion no addn
let detail2={
  name:"raj",
  salary:50000
}
Object.seal(detail2)
detail2.age=19; //not allowed
detail2.name="arka"; // allowed
delete detail2.salary; //not allowed
console.log(detail2)


//Object Destructing
//1.
let employee = {
    name: "Rahul",
    salary: 50000
};

let { name, salary } = employee;

console.log(name);
console.log(salary);

//2.adding
let member={
  myname:"Arka",
  age:19
}
// let {myname,city}=member; //undefined for city
let {myname,city="Kolkata"}=member;
console.log(myname);
console.log(city);




