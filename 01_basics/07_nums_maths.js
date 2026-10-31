const num1=400;
console.log(num1); //400 obv
//but num obj like thing 
const num2=new Number(100)
console.log(num2); //[Number:100]
console.log(num1.toString().length)//3
console.log(num1.toFixed(2));400.00

const num3=23.8966;
console.log(num3.toPrecision(3)); //23.9
console.log(num3.toPrecision(2)); //24
console.log(num3.toPrecision(1)); //2e+1 (expo value)

const num4=10000000
console.log(num4.toLocaleString()); //10,000,000
console.log(num4.toLocaleString('en-IN'));//1,00,00,000

//MATHEMATICS
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.6));//5
console.log(Math.floor(4.6));//4
console.log(Math.pow(2,4));//16
//etc etc.....


