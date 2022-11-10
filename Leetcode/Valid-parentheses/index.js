//UNDERSTAND THE PROBLEM
//There is a string that contains parentheses. The task is to 
//figure out if a trings meets certain requirments.

//WHAT IS THE INPUT? - a string that consists of '()[]{}'
//WHAT IS THE EXPECTED OUTPUT? - true or false

//THOUGHTS
//Is this a valid input ({[]})? - I suppose it is based on the condition #2 and the examples.
//So we need to compare a character with an index i and character with an index i+1

//Condition number 3 means that a valid string has an even number of characters.
//Check this first.
//Also, if the string is empty, return false.

//Then check the sequence of the brackets.

function isValid (s) {
    if (s.length % 2 != 0 || s.length == 0) {
        return false;
    }

    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    let bracketsArr = []; 
    
    for (let i = 0; i < s.length; i++) {
        let char = brackets[s[i]]
    if (char) {
      bracketsArr.push(char);
    } else if (s[i] != bracketsArr.pop()) {
      return false;
    }
  }

  //An empty array's length is 0 which is a falsy value. If an array is empty return true, otherwise - false
  return !bracketsArr.length;
}


//Testing examples
console.log(isValid('(){}'))
console.log(isValid('){}'))
console.log(isValid('{{[()]}}'))

