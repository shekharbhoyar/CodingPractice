console.log('Hello World!!!')
function intro(){
    console.log('Hello World!!!')  
}
intro();
//function declaration
function addSum(num1,num2){
    return num1 + num2
}
const Sum = addSum(16,10);
console.log(Sum);


// function expression

const isEven =function(num1){
    if(num1%2===0){
        return(`${num1} is an even number`)
    }
    return(`${num1} is an odd number` )
}
const evenNum =isEven(28)
console.log(evenNum)


//arrow function

const multiplication=(num1,num2) => {
    return num1*num2
}
let mul=multiplication(7,5)
console.log(mul)
console.log(mul)
console.log(mul)
console.log(mul)

