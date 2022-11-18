//refactored using multiple pointers pattern
function sumZero (myArr) {
    let left = 0;
    let right = myArr.length - 1

    while(left<right) {
        let sum = myArr[left] + myArr[right];
        if(sum === 0) {
            return [myArr[left], myArr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-1,0,1,2,3]))// [-1,1]