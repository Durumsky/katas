//https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript


function getOrder(input) {
    let output = '';
    let menu = [
      'Burger',
      'Fries',
      'Chicken',
      'Pizza',
      'Sandwich',
      'Onionrings',
      'Milkshake',
      'Coke',
    ];
  
    for (let meal of menu) {
      const num = input.split(meal.toLowerCase()).length -2
      if (input.includes(meal.toLowerCase())) {
        output += meal + ' ';
        let lastIndex = input.lastIndexOf(meal.toLowerCase());
        if (input.includes(meal.toLowerCase(), lastIndex)) {
          for (let i= 0; i < num; i++){
            output += meal + ' ';
          }
        }
      }
    }
    return output.slice(0, -1);
  }

 // https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 
  function count(string) {
    let object = {};
    //create an object with all the characters of a word as a key
    for (let i = 0; i < string.length; i++) {
      if (!object.hasOwnProperty(string[i])) {
        let ch = string[i];
        console.log(string[i], [...string].filter((x) => x === ch).length);
        object[string[i]] = [...string].filter((x) => x === ch).length;
      }
    }
  
    //add the number of ocurrences to each key
    return object;
  }

//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
  function solution(number){
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) sum += i
    else if (i % 5 === 0) sum += i
  }
  return sum
}

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  let duplicated = '';
  for (let letter of word.toLowerCase()) {
    word.toLowerCase().indexOf(letter) ===
    word.toLowerCase().lastIndexOf(letter)
      ? (duplicated += '(')
      : (duplicated += ')');
  }
  return duplicated;
}

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  //Recognize the words
  const wordsArr = str.split(' ');
  let pigIt = '';
  //for each word, move the first letter to the last index
  //add 'ay' and a space
  wordsArr.forEach((word) => {
    if (word !== '?' && word !== '!' && word !== '.') {
      pigIt += word.slice(1) + word[0] + 'ay' + ' ';
    } else pigIt += word;
  });
  //return removing the last space
  return pigIt.trim();
}

//more interesting solution:

function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  const newArr = [...arr];
  newArr.forEach((e) => {
    if (e === 0) {
      newArr.splice(newArr.indexOf(e), 1) && newArr.push(0);
    }
  });
  return newArr;
};