function sumZero (myArr) {
    for (let i = 0; i < myArr.length; i++) {
        for(let j=i+1; j < myArr.length; j++) {
            if(myArr[i] + myArr[j] === 0) {
                return [myArr[i], myArr[j]]
            }
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]))// [-3,3]
console.log(sumZero([-3,-2,-1,0,1,2]))// [-2,2]
console.log(sumZero([1,2,3,4,5])) //undefined