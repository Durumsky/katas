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