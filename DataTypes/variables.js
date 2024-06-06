let firstName = 'Akash'  // initialization using let, = and variable declarion using any name

let birthYear = 2012

console.log(firstName) // => Akash
console.log(birthYear) // => 2012

//variable declaration
let lastName;
console.log(lastName) // => undefined
lastName = 'Yadav' // assigning a value
console.log(lastName) // => Yadav


//manipulating variables
let num = 1
console.log(num + 3) // => 4
console.log(num) // => 1

num = num + 5
console.log(num) // => 6

//shortHand operator
console.log('using short hand operator')
let number  = 10
number += 1 //equivalent to number = number + 1 => 11
console.log(number)
number -= 1 //equivalent to number = number - 1 => 10
console.log(number)
number *= 5 //equivalent to number = number * 5 => 50
console.log(number)
number /= 10 //equivalent to number = number / 10 => 5
console.log(number)


let year = 2031
year++
console.log(year)
year--
console.log(year)


let nums;
console.log(nums + 3) // NaN
console.log('fish' * 2)// NaN
