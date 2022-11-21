//Sliding window approach
//Sum together num number of integers at the first iteration
//Then instead of looping through the entire array subtract 1st integer and add [num+1] integer

function maxSubarraySum(myArr, num){
    if(myArr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i< num; i++) {
        //sum together first num digits of myArr and store them in a variable maxSum
        maxSum += myArr[i]
    }

    //new var tempSum uses maxSum as an initial value
    tempSum = maxSum;
    for (let i = num; i < myArr.length; i++) {
        tempSum = tempSum -myArr[i-num] + myArr[i];
        // console.log(tempSum)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))