// Setup
const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUp(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i].prop;
      } else {
        return 'No such property';
      }
    } else {
      return 'No such contact';
    }
  }
}

function randomFraction() {
  return Math.floor(Math.random() * 10);
}

function disemvowel(str) {
  const regex = /[aeiou]/gi;
  const vowelReplace = str.replace(regex, '');
  return vowelReplace;
}

function countSheep(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((prev, curr) => prev + curr) / classPoints.length <
  yourPoints;

function bmi(weight, height) {
  let index = weight / Math.pow(height, 2);
  return index <= 18.5
    ? 'Undefined'
    : index <= 25.0
    ? 'Normal'
    : index <= 30.0
    ? 'Overweight'
    : 'Obese';
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let maxDistance = fuelLeft * mpg;
  if (distanceToPump >= maxDistance) {
    return true;
  } else {
    return false;
  }
};

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

function arrayPlusArray(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  return arr3.reduce((a, b) => a + b, 0);
}

function simpleMultiplication(number) {
  if (number % 2 == 0) return number * 8;
  return number * 9;
}

function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
    return true;
  } else return false;
}

function check(a, x) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

// function reverseWords(str) {
//   return str
//     .split(' ')
//     .map((word) => word.split(' ').reverse().join(''))
//     .join(' ');
// }
function reverseWords(str) {
  let arr = string.split('');
  arr.reverse();
  return arr.join('');
}

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
  if (bonus) {
    return '£' + salary * 10;
  } else {
    return '£' + salary;
  }
}

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;

    case 3:
      name = 'Earth';
      break;

    case 4:
      name = 'Mars';
      break;

    case 5:
      name = 'Jupiter';
      break;

    case 6:
      name = 'Saturn';
      break;

    case 7:
      name = 'Uranus';
      break;

    case 8:
      name = 'Neptune';
      break;
  }

  return name;
}

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

function checkForFactor(base, factor) {
  return base % factor === 0;
}

function greet(name, owner) {
  let result = name === owner ? 'Hello boss' : 'Hello guest';
}

function weatherInfo(temperature) {
  let celsius = (temperature - 32) * (5 / 9);
  if (celsius > 0) {
    return celsius + ' is above freezing temperature';
  } else {
    return celsius + ' is freezing temperature';
  }
}

// celsius = (fahrenheit - 32) * (5 / 9);

// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

function typeValidation(variable, type) {
  if (typeof variable !== typeof type) {
    return true;
  } else {
    return false;
  }
}

// let typeCheck = typeof variable !== typeof type ? true : false;
function typeValidation(variable, type) {
  return (typeCheck = typeof variable == type ? true : false);
}
