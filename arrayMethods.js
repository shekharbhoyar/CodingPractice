//setup for forEach method

// const numbers=[4,2,8,3,0,9]

// function myfunc(number,index){
//    console.log(`number is ${number} and index is ${index}`)
//
// myfunc(4,0);
// myfunc(2,1)
// myfunc(8,2)
// myfunc(3,3)
// myfunc(0,4)
// myfunc(9,5)
// for(i=0;i<numbers.length;i++){
//     myfunc(numbers[i],i)
// }
// numbers.forEach(myfunc)
// numbers.forEach(function(number,index){
//     console.log(`number is ${number} and index is ${index}`) 
// });

// example-- print every number and also print every number multiply by 2
// numbers.forEach(function(number){
//  console.log(`the number is ${number} and after multiplying by 2 the result is ${number * 2}`)
// })

// realistic example
const users=[
    {firstName:"Chandu",age:20},
    {firstName:"Nandu",age:21},
    {firstName:"Bandhu",age:22},
    {firstName:"Pandu",age:23},
]
// users.forEach(function(user){
//     // console.log(user.firstName)
//     console.log(user.age)
// })
//using arrow function
// users.forEach(user=>
//         // console.log(user.firstName)
//         console.log(user.age)
//     )

 //MAP METHOD 
 // map metod return another array
 //if you are using map function then you should always use 'return' and not'console.log'  
const numbers=[2,8,4,0,5,4,1,]
// const square = function(number){
//     // console.log(number*number)
//     return number*number
// }
const numSquare=numbers.map((number,index)=> {return `index${index},${number}`})
// console.log(numSquare)

const userss =[
    {firstName:"Chandu",age:20},
    {firstName:"Nandu",age:21},
    {firstName:"Bandhu",age:22},
    {firstName:"Pandu",age:23},
]
// const initial=userss.map((users)=>{return users.firstName})
const initial=userss.map((users)=>{return users.age})
console.log(initial)