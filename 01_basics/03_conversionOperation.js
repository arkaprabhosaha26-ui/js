let score="33";

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score); //33 as number
console.log(typeof valueInNumber); //number

let score2="33abc"
let valueInNumber2= Number(score2)
console.log(typeof valueInNumber2) //number
console.log(valueInNumber2) //Not a number (NaN)

let score3=null;
console.log(typeof score3) //obj obv
console.log(score3) //null but
let valueInNumber3= Number(score3)
console.log(typeof valueInNumber3) //number
console.log(valueInNumber3) //0

let score4=undefined;
let valueInNumber4=Number(score4);
console.log(valueInNumber4); //NaN
console.log(typeof valueInNumber4) //number

//true,false  => number and 1,0
//"hitesh" =>number and NaN

let isLoggedIn =true;
let isEligible=false;
console.log(isLoggedIn) //true
console.log(typeof isLoggedIn) //boolean
let valueinnum=Number(isLoggedIn);
console.log(valueinnum); //1
let valueinNum=Number(isEligible);
console.log(valueinNum); //0
console.log(typeof valueinnum);//number


/* Number to boolean */
let num=1;
let num1=0;
let valueinBool=Boolean(num);
let valueinBool1=Boolean(num1);
console.log(valueinBool); //true
console.log(valueinBool1); //false

let number= 33
let numtoString=String(number);
console.log(numtoString);
console.log(typeof numtoString)


let value=3;
let negation = -value;
console.log(negation)