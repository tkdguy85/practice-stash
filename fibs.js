// Fibonacci Sequence w/wo Memoization


// Without out Memoization (uncomment below to run)
// function fib(n) {
//   if (n <= 2) {
//     return 1
//   } else {
//     return fib(n -1) + fib(n -2)
//   }
// }


// console.log(fib(15))
// console.log(fib(3))
// Uncomment Example above to run without Memoization

// With Memoization (faster computing due to local cache utilization)
function fib(n, prevValue = []) {
  if (prevValue[n] != null) {
    return prevValue[n]
  }  
  let result
  if (n <= 2) {
    result = 1
  } else {
    result = fib(n -1, prevValue) + fib(n -2, prevValue)
  }
  prevValue[n] = result
  return result
}

// Sample below
console.log(fib(50))
