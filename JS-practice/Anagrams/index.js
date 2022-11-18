function validAnagram (str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const frequencyCounter = {};

    //loop through the first string and create an object which represents a breakdown of this string 
    for (let i=0; i<str1.length; i++) {
        let letter = str1[i]
        //if letter exists, increment, otherwise set to 1
        frequencyCounter[letter] ? frequencyCounter[letter] +=1 : frequencyCounter[letter] = 1;
    }

    console.log(frequencyCounter)

    //now that we constructed the frequencyCounter object we can compare each character of the str2 with the object
    for (let i=0; i<str2.length; i++) {
        let letter = str2[i]
       
        //if the letter isn't in the object, return false
        if (!frequencyCounter[letter]) {
            console.log(frequencyCounter)
            return false
        //if it IS we need to make sure that it's there equal number of times, so we subtract 1 at each iteration
        } else {
            frequencyCounter[letter] -=1
        }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('anagram', 'naggram'))
