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

//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  let parensArr = [];
  for (let i = 0; i < parens.length; i++) {
    console.log(i);
    parensArr = parens.split('()');
    parens = parensArr.join('');
    parensArr = parens.split('()');
  }
  if (parensArr.join('').length === 0) {
    return true;
  } else return false;
}

//cleverer solution:

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  let h = Math.floor(seconds / (60 * 60));
  let m = Math.floor((seconds - h * 60 * 60) / 60);
  let s = seconds - h * 60 * 60 - m * 60;
  h < 10 ? (h = '0' + h) : h;
  m < 10 ? (m = '0' + m) : m;
  s < 10 ? (s = '0' + s) : s;
  return `${h}:${m}:${s}`;
}


//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
  const rArr = [...arr];

  function reducer() {
    for (let i = 0; i < arr.length; i++) {
      if (
        (rArr[i] === 'NORTH' && rArr[i + 1] === 'SOUTH') ||
        (rArr[i] === 'SOUTH' && rArr[i + 1] === 'NORTH')
      ) {
        rArr.splice(i, 2);
      } else if (
        (rArr[i] === 'EAST' && rArr[i + 1] === 'WEST') ||
        (rArr[i] === 'WEST' && rArr[i + 1] === 'EAST')
      ) {
        rArr.splice(i, 2);
      }
    }
  }
  let counter = arr.length;
  while (counter > 0) {
    reducer();
    counter -= 1;
  }
  return rArr;
}

//other solution using the ternary in the return instead of the while loop
function dirReduc(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
        arr[i] === "EAST" && arr[i+1] === "WEST" ||
        arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
        arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
        arr.splice(i, 2);
        count++;
        i--;
    }
  }
  return count === 0 ? arr : dirReduc(arr);
}

//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  //check if word of words contains all the letters of word
  //check if the letters are as many times
  const anagramArr = [];
  for (let item of words) {
    if (word.split('').sort().join() === item.split('').sort().join()) {
      anagramArr.push(item);
    }
  }

  return anagramArr;
}