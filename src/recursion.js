/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var copyArr = array.slice();
  var result = 0;

  if (copyArr.length === 0) {
    return result;
  }

  result = copyArr.shift();

  return result + sum(copyArr);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var result = 0;

  if (!Array.isArray(array)) {
    return array;
  }

  array.forEach(function(item) {
    result += arraySum(item);
  })

  return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// sumBelow(4); // 6
var sumBelow = function(n) {
  // return sum
  var negative = 1;
  var result = 0;
  var num = 0;

  if (Math.sign(n) === -1 || Math.sign(n) === -0) {
    negative = -1;
    n = Math.abs(n);
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 0;
  }

  num = n - 1
  result = num;
  result += sumBelow(num);

  return result * negative;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var result = [];

  if (x < y) {
    if (y - x <= 1) {
      return [];
    }

    result = range(x, y - 1);
    result.push(y - 1);
  } else if (x > y) {
    if (x - y <= 1) {
      return [];
    }

    result = range(x, y + 1);
    result.push(y + 1);
  }

  return result;

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  var isNegative = false;

  if(exp < 0) {
    exp = exp * -1;
    isNegative = true;
  }

  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  var result = base * exponent(base, exp - 1);

  if (isNegative === true) {
    return 1 / result;
  }

  return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1) {
    return true;
  }

  if (n < 2) {
    return false;
  }

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === '') {
    return '';
  }

  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // check if last char doesnt equal first char
  string = string.toLowerCase();

  if (string.length <= 1) {
    return true;
  }

  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return palindrome(string.slice(1, -1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var result = 0;
  var isNegative = false;

  if (y === 0) {
    return NaN;
  }

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
    isNegative = true;
  } else if (x < 0 && y > 0) {
    x = -x;
    isNegative = true;
  } else if (x > 0 && y < 0) {
    y = -y;
    isNegative = true;
  }

  if (x === y) {
    return 0;
  }

  if (x < y) {
    if (isNegative) {
      return -x;
    } else {
      return x;
    }
  }

  result = modulo(x - y, y);

  if (isNegative) {
    return -result;
  }

  return result;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var result = 0;
  var isNegative = false;

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
    isNegative = false;
  } else if (x < 0 && y > 0) {
    x = -x;
    isNegative = true;
  } else if (x > 0 && y < 0) {
    y = -y;
    isNegative = true;
  }

  if (x === 0 || y === 0) {
    return 0;
  }

  result = x + multiply(x , y - 1);

  if (isNegative) {
    return -result;
  }

  return result;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var result = 0;
  var isNegative = false;


  if (y === 0) {
    return NaN;
  }

  if (x === 0) {
    return 0;
  }

  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
    isNegative = false;
  } else if (x < 0 && y > 0) {
    x = -x;
    isNegative = true;
  } else if (x > 0 && y < 0) {
    y = -y;
    isNegative = true;
  }

  if (x === y) {
    return 1;
  }

  if (x < y) {
    return 0;
  }

  result = 1 + (divide(x - y, y));

  if (isNegative) {
    return -result;
  }

  return result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }

  if (x < y) {
    var swap = y;
    y = x;
    x = swap;
  }

  if (y === 0) {
    return x;
  }

  return gcd(y, x % y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  }

  if(str1.length === 0 && str2.length === 0) {
    return true;
  }

  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var result = [];

  if (str.length === 0) {
    return [];
  }

  result = createArray(str.slice(0, -1));
  result.push(str[str.length - 1]);

  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var results = [];

  if (array.length === 0) {
    return [];
  }

  results.push(array[array.length - 1]);
  results = results.concat(reverseArr(array.slice(0, -1)))
  // results = reverseArr(array.slice(1));
  // results.push(array[0]);

  return results;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var results = [];

  if (length === 0) {
    return [];
  }

  results.push(value);
  results = results.concat(buildList(value, length - 1));

  return results;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var results = [];

  if (n === 1) {
    return ['1'];
  }

  if (n % 3 === 0 && n % 5 === 0) {
    results.push('FizzBuzz');
  } else if (n % 3 === 0) {
    results.push('Fizz');
  } else if (n % 5 === 0) {
    results.push('Buzz');
  } else {
    results.push(n.toString());
  }

  results = (fizzBuzz(n - 1)).concat(results);

  return results;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var result = 0;

  if (array.length === 0) {
    return 0;
  }

  if (array[0] === value) {
    array.shift();
    result = 1 + countOccurrence(array, value);

    return result;
  } else {
    array.shift();

    return countOccurrence(array, value);
  }

};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var results = [];

  if (array.length === 0) {
    return [];
  }

  results.push(callback(array[0]));
  results = results.concat(rMap(array.slice(1), callback));

  return results;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var result = 0;

  if (typeof obj !== 'object') {
    return 0;
  }

  for (var item in obj) {
    if (item === key) {
      result += 1 + countKeysInObj(obj[item], key);
    } else {
      result += countKeysInObj(obj[item], key);
    }
  };

  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var result = 0;

  if (typeof obj !== 'object') {
    if (obj === value) {
      return 1;
    }
    return 0;
  }

  for(var item in obj) {
    result += countValuesInObj(obj[item], value);
  };

  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if (obj[oldKey]) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  if (typeof obj !== 'object') {
    return;
  }

  for (var key in obj) {
    replaceKeysInObj(obj[key], oldKey, newKey);
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var results = [0];

  // check if n is 0
  if (n === 0 || n < 0) {
    // base case return 0
    return null;
  }
  //
  if (n === 1) {
    results.push(1);

    return results;
  }

  results = (fibonacci(n - 1)) + (fibonacci(n - 2));

  return results;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var results = [];

  if (array.length === 0) {
    return [];
  }

  results.push(array[0].toUpperCase());
  results = results.concat(capitalizeWords(array.slice(1)));

  return results;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var results = [];

  if (array.length === 0) {
    return [];
  }

  results.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  results = results.concat(capitalizeFirst(array.slice(1)));

  return results;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;

  if (typeof obj !== 'object') {
    if (obj % 2 === 0) {
      return obj;
    }

    return 0;
  }

  for (var item in obj) {
    result += nestedEvenSum(obj[item]);
  }

  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var results = [];

  if (!Array.isArray(array)) {
    return array;
  }

  array.forEach(function(item) {
    results = results.concat((flatten(item)));
  })

  return results;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var char = str[0];

  if (obj === undefined) {
    obj = {};
  }

  if (str.length === 0) {
    return {};
  }

  if (obj[char] >= 1) {
    obj[char]++;
  } else {
    obj[char] = 1;
  }

  letterTally(str.slice(1), obj);

  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var results = [];

  if (list.length === 0) {
    return [];
  }

  if (list[0] !== list[1]) {
    results.push(list[0]);
  }

  results = results.concat(compress(list.slice(1)));

  return results;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length <= 1) {
    return aug;
  }

  array.forEach(function(item) {
    item.push(augmentElements(item, aug));
  });

  return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var results = [];

  if (array.length === 0) {
    return [];
  }

  if (array[0] !== 0) {
    results.push(array[0]);
  }

  if (array[0] === 0 && array[1] !== 0) {
    results.push(array[0]);
  }

  results = results.concat(minimizeZeroes(array.slice(1)));

  return results;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var results = [];

  if (!Array.isArray(array)) {
    return Math.abs(array);
  }

  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      results = results.concat(alternateSign(array[i]));
    } else {
      results = results.concat(-alternateSign(array[i]));
    }
  }

  return results;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var result = '';
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  str = str.split(' ');

  if (!isNaN(str)) {
    return numbers[parseInt(str)];
  }

  if (str.length === 1) {
    return str[0];
  }

  str.forEach(function(item) {
    result += numToText(item) + ' ';
  });

  return result.slice(0, -1);
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
