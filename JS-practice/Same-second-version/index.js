//this method allows to avoid using nested loops; time complexity O(n)

function same(firstArray, secondArray) {
if(firstArray.length !== secondArray.length) {
    return false;
}

//create two objects to count frequency of individual values in the arrays
let frequencyCounter1 = {};
let frequencyCounter2 = {};

for (let value of firstArray) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
}

for (let value of secondArray) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
}

for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
        return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false
    }
} 
console.log(frequencyCounter1)
console.log(frequencyCounter2)
return true
}

console.log(same([1,3,5,7],[49,25,9,1])) //true
console.log(same([1,5,7],[49,25,9,1])) //false
console.log(same([1,3,5,7],[49,25,49,1])) //false