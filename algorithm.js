//              Searching algorithms

//Leanier Search

//Binary Search

//               Sorting algorithms

//Bubble Sort

//Selection Sort

// Merge Sort

//Quick sort
//quick sort is highly efficient and widely used sorting algorithm.
//It is based on devide-conqure strategy, which involves beaking a problem into subproblems
//create a pivot
//partetion the elements in the array
//  left side of elements pivote to one subarray
//  right side of elements to one subarray
//sorted sub arrays are combined
<<<<<<< HEAD
/*
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
*/
=======
>>>>>>> bfa2357c43a525283b06cbb4205f0cfd69fe7cff
