//setup for forEach method

const numbers=[4,2,8,3,0,9]

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
numbers.forEach(function(number){
 console.log(`the number is ${number} and after multiplying by 2 the result is ${number * 2}`)
})
