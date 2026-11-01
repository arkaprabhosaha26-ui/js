const myArr=[10,1,2,3,4,true,"raj"];
const myHeroes=["Iron Man","Dr.Strange"];
const myArrobj=new Array(1,22,3,4,"arka"); //array obj

console.log(myArr[0]); //10

//methods
myArr.push(6)
console.log(myArr);
myArr.pop(); //6
console.log(myArr);

myArr.unshift(9)
console.log(myArr); //9 in first but time consuming
myArr.shift()
console.log(myArr); //9 gone 

const newArr=myArr.join();
console.log(newArr); //string

const slice1=myArr.slice(1,5)
console.log(slice1)

const splice1=myArr.splice(1,5)
console.log(splice1)//takes out from 1 to 5 and 5 included
console.log(myArr) //[10,raj] and [1, 2, 3, 4, true] cut off


const marvel_heroes=["thor","loki","iron_man","captain","hulk"]
const dc_heroes=["superman","batman","flash"]

console.log(marvel_heroes.concat(dc_heroes))

const arr1=[1,2,3,[4,5,6],7,[8,9,10,[11,12]]]
console.log(arr1.flat(Infinity))//jodi 1 likhi tale 4 5 6 khulbe but 11 12 khulbe na ar 2 korle sob khulbe 

console.log(Array.from("raj")) //String to array
//also
let score1=100;
let score2=300;
let score3=200;
console.log(Array.of(score1,score2,score3));
