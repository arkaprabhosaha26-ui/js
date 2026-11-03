/* let student={
  myName:"Raj",
  age:20,
  greet(){
    console.log("Hello users , my name is "+this.myName);
    
  }
}
student.greet(); */  // hello users,my name is Raj

let student = {
    name: "Raj",
    marks: 85,

    result() {
        this.marks = this.marks + 5; //updated
        console.log(this.marks); //90 and updated
    }
};

student.result();

console.log(student.marks);//90


//with parameters
let student1={
  name:"Raj",
  greet1(message){
    console.log(message+" " + this.name);
    
  }
}
student1.greet1("Hello")
//practice
let employee = {
    name: "Rahul",
    salary: 30000,

    increaseSalary: function(amount) {
        this.salary = this.salary + amount; //35000
        console.log(this.salary);//35000
    }
};

employee.increaseSalary(5000);

console.log(employee.salary);//35000

//arrow functions are useful for callback
let numbers=[10,20,30,40];
numbers.forEach((num=>{
  console.log(num);
  
}))

//1.arrowfunction inside regular functions
let student3={
  name:"raj",
  marks:[89,90,75],
  showDetails(){
     this.marks.forEach((mark)=>{
      console.log(this.name+" scored "+mark)
     })
  }
}
student3.showDetails();
//2.using map 
//it creates and returns a new array containing the results
let numbersObtained=[10,20,30,40];
let result=numbersObtained.map((num)=>{
  return num*2;
})
console.log(result); //we can print like forEach by writing like that but we use map for returning new array as the main purpose
//[20,40,60,80]
console.log(numbersObtained);//unchanged

//3.no change in original array like "this"
let nums = [2, 4, 6];

let outPut = nums.map((num) => {
    return num + 10;
});

console.log(outPut);
console.log(nums);//unchanged
//4.consitions (filter)
let arr=[5,10,15,1680,98];
let output=arr.filter((num)=>{
  return num>=15;
})
console.log(output);
console.log(arr) //unchanged

//5.find() and findIndex()//if no element sat condition of findIndex then -1 is the output
let n=[10,20,30,40,50]
//1.forEach()
let ans=n.forEach((num)=>{
  console.log(num)//10 20 30 40 50
})
//2.map()
let result0=n.map((num0)=>{
  return(num0);
})
//3.filter()
let result1=n.filter((num1)=>{
  return num1>25;//[30,40,50]
})
//4.find()
let result2=n.find((num2)=>{
  return num2>25; //30
})
//5.findIndex()
let result3=n.findIndex((num3)=>{
  return num3>25; //2
})
//6.some() //if atleast one element satisfy the condn
let result4=n.some((num4)=>{
  return num4>25; //30
}) //true
//7.every() // all elements must satisfy the condn
let result5=n.every((num5)=>{
  return num5>25; //30
})
console.log(result0)
console.log(result1);//[30,40,50]
console.log(result2);//30 finds the first element fulfilling the condition
console.log(result3);
console.log(result4);
console.log(result5);

//8.reduce()
//a.sum
let numArr=[5,10,15];
let redRes=numArr.reduce((total,num)=>{
  return total+num; //its like total=total+num
},0)//here 0 is the initial value of 'total'
console.log(redRes)
//b.product
let numberProd = [2, 3, 4];

let resultProd = numberProd.reduce((total, num) => {
    return total * num;
}, 1);//1 is the initial value of 'total'
console.log(resultProd);









