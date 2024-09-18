// console.log('Hello World!!!')
// intro();
// function intro(){
//     console.log('Hello World!!!')  
// }

//function declaration
// console.log(Sum);
// function addSum(num1,num2){
//     return num1 + 
// }
// const Sum = addSum(16,10);




// function expression
// console.log(evenNum)
// const isEven =function(num1){
//     if(num1%2===0){
//         return(`${num1} is an even number`)
//     }
//     return(`${num1} is an odd number` )
// }
// const evenNum =isEven(28)

// addNum();
// const addNum= function(){
//    return('Hello World!!!')
// }
//arrow function

// const multiplication=(num1,num2) => {
//     return num1*num2
// }
// let mul=multiplication(7,5)
// console.log(mul)
// console.log(mul)
// console.log(mul)
// console.log(mul)


//input:anystring
//output:character on given index position

// function firstChar(anystring){
//     return anystring[5]
// }
// console.log(firstChar("rashtrapati"))

//input:array target(number)
//output:index of target if target present in array
// function findTarget(array,target){
//    for(let i=0;i<array.length;i++){
//     if (array[i]===target){
//         return i;
//     }
//    }
//    return -1;
// }
// const myArray =[3,8,9,5,0,3,9,7,1,6,3]
// const result=findTarget(myArray,2)
// // console.log(result)


//Arrow function

const addNumber = (a,b)=>{
return a+b;
}
const sum = addNumber(3,5);
// console.log(sum);

// const firstCharc = anyString => anyString[3];
// console.log(firstCharc('rashtrapati'))

//default parameters
//before 2015 or ES6
// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b=1;
//     }
//     return a+b;
// }
// const addition =addTwo(5)
// console.log(addition)

//after 2015 or ES6
function addTwo(a,b=1){
   
    return a+b;
}
const addition =addTwo(5)
// console.log(addition)

//rest parameters

function myfunc(a,b,...c){
    console.log(`value of a is ${a}`)
    console.log(`value of b is ${b}`)
    console.log('value of c is', c)
}

// myfunc(1,2,3,4,5,)

//addall
function addAll(...numbers){
    let total=0;
    for(number of numbers){
        total = total +number;
    }
    return total;
}
const sumAll=addAll(1,2,3,4,5,6,7,8,9,10)
// console.log(sumAll)

// parameter destructuring
// widely used with object and in react

const person ={
    firstName:"Chandu",
    gender:"male"
}

function getDetails(obj){
console.log(obj.firstName);
console.log(obj.gender)
}
getDetails(person);

//we can do these same with different method

function getDetails2({firstName,gender}){
    console.log(firstName);
    console.log(gender)
}
// getDetails2(person);


