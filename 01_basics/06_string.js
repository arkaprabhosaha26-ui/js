const myName="raj";
const age=19;
//old method
console.log("hello my name is "+myName+" and my age is "+age);
//string interpolation
console.log(`Hello my name is ${myName} and my age is ${age} `);


//now something new (String)

const Name=new String("raj")
console.log(Name) //String('raj) not raj 
//so the diff is prev was primitive string this is string object

//so
console.log(myName[0]);//r
console.log(Name[0]);//r
console.log(Name.length)//3
console.log(myName.length)//3
console.log(Name.toUpperCase());//RAJ
console.log(myName.toUpperCase());//RAJ
console.log(myName.charAt(2));
console.log(myName.indexOf('j'));
console.log(myName.substring(0,2));//ra
console.log(myName.slice(-3,2));//ra

//trim
const string1="    arkaprabho    "
console.log(string1.trim())

//replace
const url="https://raj.com/raj%20saha"  //here %20 is bcz of space , now
console.log(url.replace('%20','-'));

//includes
console.log(url.includes('aj')); //true

//string to array
const name2="raj saha 19";
console.log(name2.split(' '));










