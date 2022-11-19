//array is sorted
//returns count of unique numbers/first occurance
//the array is sorted so at each iteration compare element with an index [i] with an element [i+1]

function countUniqueValues(myArr) {
    if(myArr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < myArr.length; j++) {
        if(myArr[i] !== myArr[j]) {
           i++;
           myArr[i] = myArr[j]
        }
    }
    return i + 1
}

console.log(countUniqueValues([1,2,3,3,3,5,6,7,8,9,45]))