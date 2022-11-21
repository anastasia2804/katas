function maxSubarraySum (myArr, num) {
    if (myArr.length < num) return null

    //can start with 0 assuming there are only positive integers
    var max=-Infinity; 
    for (let i = 0; i < myArr.length - num + 1; i++) {
        var temp = 0;
        for (let j=0; j< num; j++) {
            temp += myArr[i+j]
        }
        if (temp > max) {
            max=temp;
        }
        console.log(temp, max)
    }
    return max
}

console.log(maxSubarraySum([1,4,5,6,7,8,5,6,7], 3))
console.log(maxSubarraySum([], 2))