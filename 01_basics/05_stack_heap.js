//Stack(primitive),Heap(Non-Primitive)

//stack uses copy for a change in another variable 
let a1="raj";
let a2=a1;
a2="arka"
console.log(a1) //raj
console.log(a2) //arka

//but in case of heap memory , same ref is used for both userOne and userTwo

let userOne={
  email:"rajsaha43@gmail.com",
  upi:"raj@ybl"
}
let userTwo=userOne;
userTwo.email="arka34@gmail.com"
userTwo.upi="arka@ybl"

console.log(userOne) //update
console.log(userTwo) //update