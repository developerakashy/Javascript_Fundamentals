let arr = ['a', 'b', 1, 'c', 234, ["apple"]]


console.log(arr.length)
console.log(arr[5])
console.log(arr[6]) //undefined index out of range
console.log(arr.indexOf(234))


let num1 = [1, 2, 3, 4]
let num2 = [5, 6, 7, 8]

console.log(num1 + num2) //will return a string '1, 2, 3, 4, 5, 6, 7, 8'
console.log(num1.concat(num2)) //[1,2....8]


let array = [1, 2, 3, 4, 5]
console.log(array)
array.push(6)
console.log(array)
array.pop()
console.log(array)