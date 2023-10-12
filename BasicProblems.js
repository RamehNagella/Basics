//adding a two number
const add = (a, b) => a + b;

//adding array of elemetns

const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
sumArr([1, 2, 3]);
// remember arrays are 0 index based
// arr[n]=== undefined
// arr[n-1] == element

array = [1, 2, 3, 4, 5];
// adding array of elements using reduce function
console.log(array.reduce((cur, acc) => cur + acc, 0));

//adding a number recursively for n times

function addRec(number, n) {
  if (n === 0) {
    return 0;
  }
  return number + addRec(number, n - 1);
}
console.log(addRec(2, 5));

const addSingle = (n) => 0 + n;
console.log(addSingle(2));

//Differentiating two numbers

const diff = (a, b) => a - b;

//differentiate 3 numbers;
const diff3Num = (a, b, c) => {
  let diff = a - b;
  return diff - c;
};
console.log(diff3Num(1, 2, 4));

function findDifference(a, b, c) {
  console.log(Math.max(a, b, c));
  console.log(Math.min(a, b, c));
  return Math.max(a, b, c) - Math.min(a, b, c);
}
console.log(findDifference(1, 2, 3));

//find difference of elements in the array

function arrayDiff(arr) {
  let difference = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    difference.push(diff);
  }
  console.log(difference);
}
arrayDiff([1, 2, 3, 4, 5]);

//finding the total difference in the array

function totalDiffArr(arr) {
  let totalDiff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    totalDiff += arr[i + 1] - arr[i];
    console.log(totalDiff);
  }
  return totalDiff;
}
console.log(totalDiffArr([1, 2, 3, 4, 5]));

function recursivDiff(arr) {
  let diffEle = 0;
  let difference;
  for (let i = 0; i < arr.length - 1; i++) {
    diffEle += Math.abs(arr[i + 1] - arr[i]);
  }
  console.log("//", diffEle);
  return diffEle;
}
console.log(">>", recursivDiff([6, 2, 3, 4]));

console.log(Math.abs(-1)); //1

//multiplication

const multiply = (a, b) => a * b;

function multiply3ele(a, b, c) {
  return a * b * c;
}
console.log(multiply3ele(1, 2, 3));

function multiplyRecursively(a, n) {
  if (n <= 0) {
    return 1;
  }

  //   console.log(`${n}`, a * multiplyRecursively(a, n - 1));
  return a * multiplyRecursively(a, n - 1);
}
console.log(multiplyRecursively(2, 3));

// 1. a=2, n = 3;
// 2*multiply(2,2)
// 2*2*multiply(2,1)
// 2*2*2*multiply(2,0)
//2*2*2*1
//8

//multiplying array of numbers

function multiplyArrEle(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  console.log(">>", result);
}
// multiplyArrEle([1, 2, 3]);
multiplyArrEle([2, 3, 4, 5, 6]);

// [1,2,3,4]
// a[0]*a[1]= 1*2 = 3=>result
//result *= a[0];
//result *=a[1];
//
// 1.1*2=2
// 2.2*3=6
// 3.6
const multiplyArr = [2, 3, 4, 5, 6];

let result = 1;
multiplyArr.forEach((el) => {
  result *= el;
  console.log(result);
});

//finding the factorial of given number

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(6));

//Devide two numbers
const devide = (a, b) => a / b;
console.log(devide(4, 2));

// find quetiont of the given numbers
const quetiont = (a, b) => a % b;
console.log(quetiont(5, 2));

//devide the 3 elements in the array

const devide3el = (a, b, c) => {
  let div1 = a / b;
  let div2 = Math.abs(div1 / c).toFixed(2);
  return div2;
};
console.log(devide3el(1, 2, 3));

//devide the elements in the array

function devideArr(arr, div) {
  console.log(arr, div);
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let division = arr[i] / div;
    result.push(division);
  }

  console.log(result);
}
devideArr([1, 2, 3, 4], 2);

//writing funciton for division without having devisior

function deivideArrWithoutDiv(arr) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let divide = Math.abs(arr[i] / arr[i + 1]).toFixed(2);
    result.push(divide);
  }
  console.log(result);
}
deivideArrWithoutDiv([1, 2, 3, 4]);

//

function devideRecursively(arr) {
  if (arr.length === 0) {
    return 1;
  }
  let result = arr[0];
  let quetiont;
  for (let i = 0; i < arr.length - 1; i++) {
    result /= arr[i + 1];
    quetiont = result % arr[i + 1];
  }
  console.log("///", result, quetiont);
  return { result, quetiont };
}
console.log(devideRecursively([1, 2, 3, 4]));

const arrayMap = [1, 2, 3, 4, 5];

console.log(arrayMap.map((el) => el / 2));

///
/*

//code for printinf natuaral numbers

function printNaturalNumber(n) {
  for (let i = 1; i <= n; i++) {
    console.log("///", i);
    // return i;
  }
}
console.log(printNaturalNumber(4));

//code for print the even numbers

function printEvenNum(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
    // return i;
  }
}
printEvenNum(10);

//code for printing the prime numbers

//number to be prime
// num%2 ===0
// num%3 ===0 not a prime number

//
//1. find the number is prime or not

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function printPrimeNumbers(n) {
  if (n < 2) {
    return "cannot print prime numbers for ";
  }
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      console.log("pr", i);
    }
  }
}

printPrimeNumbers(50);

//finding evenNumbers

function evenNum(num) {
  if (num % 2 === 0) {
    return "given number is even";
  }
  return "given number is not even";
}
console.log(evenNum(4));
console.log(evenNum(5));

//finding number is odd or not

function oddNum(num) {
  if (num % 2 === 1) {
    return "given number in odd";
  }
  return "given number is not odd number";
}
console.log(oddNum(41));
console.log(oddNum(50));

//find the given number is prime or not

function isPrime1(num) {
  if (num <= 1) return "not prime";
  if (num <= 3) return "it is a prime";
  if (num % 2 === 0 || num % 3 === 0) return "not a prime";
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return "NOT PRIME";
  }
  return "it is a prime";
}
<<<<<<< HEAD

=======
>>>>>>> bfa2357c43a525283b06cbb4205f0cfd69fe7cff
console.log(isPrime1(1));
console.log(isPrime1(7));
console.log(isPrime1(65));
console.log(isPrime1(25));
<<<<<<< HEAD

// finding number is a primeNumber

function isPrime2(num) {
  if (num <= 1) {
    return "cannot find";
  }
  if (num <= 3) {
    return "The number is a prime number";
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return "Number is not a prime";
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return "Not a prime Number";
  }
  return "NUmber in prime";
}
console.log(isPrime2(2));
console.log(">>", isPrime2(5));
console.log(isPrime2(10));
console.log(isPrime2(9));
console.log(isPrime2(25));

//write a code for finding the expoenential

function expoenential(b, n) {
  result = b ** n;
  console.log(result);
  return result;
}
console.log(expoenential(2, 2));

//write a code for finding pow(e,n)

function findExpPow(num) {
  let result = Math.exp(num);
  return result;
}
console.log(findExpPow(1));

//finding the value of e^e^2

// function recursiveExp(n) {
//   let result = Math.exp(n);
//   let final = result;
//   return result * recursiveExp(n - 1);
// }
// console.log(recursiveExp(2));
//will not work

function recursiveExp(n) {
  let e = Math.E;
  let power = Math.exp(Math.pow(e, 2));
  console.log(power);
  return power;
}
console.log(recursiveExp(2));

function recursiveExpforNtimes(base, n) {
  if (n === 0) return 1;
  if (n > 0) return base * recursiveExpforNtimes(base, n - 1);
  else return 1 / recursiveExpforNtimes(base, -n);
}
console.log(recursiveExpforNtimes(Math.E, 2));
console.log(Math.E * Math.E);
console.log(recursiveExpforNtimes(3, 4));

function expRecursive(n) {
  if (n <= 0) {
    return 1;
  }
  let e = Math.E;
  let result = Math.pow(e, expRecursive(n - 1));
  // console.log(result);
  return result;
}
// console.log(expRecursive("1>> ", 1));//RangeError: Maximum call stack size exceeded
console.log("2>>>>>", expRecursive(2));
console.log(expRecursive(3));

// e^expRecursive(2)
//e^e^expRecursive(1)
//e^e^e

//print factiorial of given number

function findFactiorial(n) {
  if (n <= 0) return 1;
  return n * findFactiorial(n - 1);
}
console.log(findFactiorial(4));
console.log(findFactiorial(7));

//print fibanocci series
function findFibanocci(n) {
  if (n <= 0) return 1;
  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray.slice(0, n);
}
console.log(findFibanocci(10));
const fibanocciSeries = findFibanocci(9);
console.log(...fibanocciSeries);

// 0 1 1 2 3 5 8 13 21 ...

//write a code for print the * like below
//  *
//*   *
//and so on for 4 lines

function printIncStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
      row += " * ";
    }
    console.log(row);
  }
}
// printIncStars(2); //*  *
printIncStars(3); //*  *
// printIncStars(5); //*  *
=======
>>>>>>> bfa2357c43a525283b06cbb4205f0cfd69fe7cff
*/