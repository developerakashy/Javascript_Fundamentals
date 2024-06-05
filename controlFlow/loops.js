function forLoopDoubler(arr){

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }

    return arr

}

function whileLoopDoubler(arr){
    let index = 0
    
    while(index < arr.length){
        arr[index] = arr[index] * 2

        index++
    }

    return arr
}

console.log(forLoopDoubler([1, 2, 3]))
console.log(whileLoopDoubler([1, 2, 3]))