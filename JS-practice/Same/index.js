function same(firstArray, secondArray) {
    if(firstArray.length !== secondArray.length) {
        return false;
    }
//Loop over the first array and check every Element and look for the index of the Element squared in the second array
    for(let i=0; i<firstArray.length; i++) {
        let index = secondArray.indexOf(firstArray[i] ** 2)
//if the Element isn't there, return false
        if(index === -1) {
            return false;
        }
//if the Element is there remove this Element from the second array
        secondArray.splice(index, 1)
    }
return true;
}

console.log(same([1,3,5,7],[49,25,9,1])) //true
console.log(same([1,5,7],[49,25,9,1])) //false
console.log(same([1,3,5,7],[49,25,49,1])) //false