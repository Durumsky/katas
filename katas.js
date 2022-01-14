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