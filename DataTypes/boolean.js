//boolean operators !(NOT), ||(OR), &&(AND)
console.log('NOT')
console.log(!true) //will print false
console.log(!false) //will print true
console.log(!!false) //will print false


//logical AND
console.log('AND')
console.log(true && false) // ==> false
console.log(false && true) // ==> false
console.log(true && true) // ==> true
console.log(false && false) // ==> false


//logical OR
console.log('OR')
console.log(true || false) // ==> true
console.log(false || true) // ==> true
console.log(true || true) // ==> true
console.log(false || false) // ==> false


//logical order of operation !> &&> ||
console.log('Order')
console.log(true || true && false) // ==> true
console.log(false && !(false || true)) // ==> false

//De Morgan's law
console.log('De Morgans Law')
console.log(!(true || false)) // equivalent = !true && !false ==> false
console.log(!(false && true)) // equivalent = !false || !true ==> true



