//spread and rest operator
let obj1 = {
    name: "Raj",
    age: 21
};

let obj2 = { ...obj1 };
obj2.name="Rahul";
obj2.age=19;
console.log(obj2);
console.log(obj1) //remains same as obj2 is using a copy 
let result1 = { ...obj1, ...obj2 }; //when prop have same name later obj's name overwrites earlier one 

console.log(result1);


//1.adding two objs
let obj3 = {
    name: "Raj",
    age: 21
};

let obj4 = {
    city: "Kolkata",
    salary: 50000
};

let result = { ...obj3, ...obj4 };

console.log(result);
