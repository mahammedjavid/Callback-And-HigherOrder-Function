var radius = [5,4,5,6,7,9]


// // Area
// var calculateArea = function(radius){
//     let output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(radius[i]*radius[i]*Math.PI)
//     }
//     return output
// }

// console.log(calculateArea(radius))  


// // Circumference
// var calculateCircum = function(radius){
//     let output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output
// }

// console.log(calculateCircum(radius))  



// Effective Way to write Program ---
// Higher Order Function

var area = function(radius){
    return Math.PI*radius*radius
}
var circm = function(radius){
    return 2*Math.PI*radius
}

var dia = function(radius){
    return 2*radius
}

var highcal = function(radius,logic){
    let output = []
    for(let i = 0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(highcal(radius,area))
console.log(highcal(radius,circm))
console.log(highcal(radius,dia))


console.log("mapping")


//  map function takes the data and add logic as an arguments
// console.log(radius.map(area))


// if we want to apply function to all the array in present here , we need to use prototype


Array.prototype.highcal = function(logic){
    let output = []
    for(let i = 0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log("Added Protorype-1: ", radius.highcal(area))
console.log("Added Protorype-2: ", radius.highcal(circm))
console.log("Added Protorype-3: ", radius.highcal(dia))

// console.log(radius.map(area))










// Example



const numbers = [1, 2, 3, 4, 5];
function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}
const oddArray = isOdd(numbers);
console.log(oddArray);











