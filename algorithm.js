//              Searching algorithms

//Leanier Search

function linearSearch(arr) {
  let targetEl = 4;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === targetEl) {
      return i;
    }
  }
  return "targetEl not found";
}
// console.log(linearSearch([1, 2, 4, 5, 6]));
//

//Binary Search
// function binarySeach(arr, targetEl) {
//   // let i = 0;
//   let n = arr.length - 1;
//   for (i = 0; i < n; i++) {
//     let mid = Math.floor((i + n) / 2);
//     if (mid === targetEl) return i;
//   }
//   return "targetEl Not found";
// }

//which is totally wrong

function binarySeach(arr, targetEl) {
  // let arr = [...array].sort((a, b) => a - b);
  // console.log(arr);
  let i = 0;
  let n = arr.length - 1;

  for (; i <= n; ) {
    let mid = Math.floor((i + n) / 2);
    if (arr[mid] === targetEl) {
      return mid;
    }
    if (arr[mid] < targetEl) {
      i = mid + 1;
    } else {
      n = mid - 1;
    }
  }
  return "targetEl not found";
}
// console.log(binarySeach([0, 1, 2, 5, 21], 21));
// console.log(binarySeach([12, 1, 21, 2, 3, 4], 21));
// console.log(binarySeach([1, 2, 3, 4], 6));
//
// 4
// 0
// targetEl not found

// If you're working with an unsorted array and need to perform a binary search without sorting it,
//  then the algorithm won't work correctly. Binary search relies on the array being sorted
// to function properly.
// using while loop
function binarySeach1(arr, targetEl) {
  let i = 0;
  let n = arr.length - 1;
  let mid = Math.floor((i + n) / 2);
  while (i <= n) {
    if (arr[mid] === targetEl) return mid;
    if (arr[mid] < targetEl) mid = mid + 1;
    if (arr[mid] > targetEl) mid = mid - 1;
  }
  return "target element not found";
}
console.log(binarySeach1([1, 2, 3, 4, 5], 4));

//               Sorting algorithms

//Bubble Sort
function bubbleSort(arr) {
  // let sortedArray = arr;
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] > arr[i + 1]) {
  //     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i + 1]];
  //     // console.log(arr[i]);
  //     sortedArray.push(arr[i + 1]);
  //   }
  // }
  // return sortedArray; ///>>>>>>>.. wrong code
  let sortedArry = [...arr];
  for (let i = 0; i < sortedArry.length; i++) {
    for (let j = 0; j < sortedArry.length - 1 - i; j++) {
      console.log("iii", i);
      console.log("jjj", j);
      if (sortedArry[j] > sortedArry[j + 1]) {
        let temp = sortedArry[j];
        sortedArry[j] = sortedArry[j + 1];
        sortedArry[j + 1] = temp;
      }
    }
  }
  return sortedArry;
}
console.log(bubbleSort([1, 0, 4, 2, 3, 4]));
//Selection Sort

// Merge Sort
/*
//Quick sort
//quick sort is highly efficient and widely used sorting algorithm.
//It is based on devide-conqure strategy, which involves beaking a problem into subproblems
//create a pivot
//partetion the elements in the array
//  left side of elements pivote to one subarray
//  right side of elements to one subarray
//sorted sub arrays are combined
<<<<<<< HEAD
=======

>>>>>>> bfa2357c43a525283b06cbb4205f0cfd69fe7cff
function quickSort(arr) {
  console.log(arr);
  if (arr.length <= 1) {
    return arr;
  }
  const pivote = arr[Math.floor(arr.length / 2)];
  console.log("11", pivote);
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    console.log("iii", i);

    if (arr[i] < pivote) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log("left", quickSort(left));
  return quickSort(left).concat([pivote], quickSort(right));
}

const arrayToqSort = [3, 2, 6, 4, 5];
const resultQuickSort = quickSort(arrayToqSort);

console.log(">>>", resultQuickSort);

//fibanocci

function fibanocci(n) {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib.slice(0, n + 1);
}

console.log(fibanocci(5));
console.log(fibanocci(10));
<<<<<<< HEAD
=======
>>>>>>> bfa2357c43a525283b06cbb4205f0cfd69fe7cff
*/
