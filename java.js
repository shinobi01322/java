// ===== STRING MANIPULATION FUNCTIONS =====

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 2. Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // 3. Capitalize Words
  function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // ===== ARRAY FUNCTIONS =====
  
  // 4. Find Maximum Value
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // 5. Find Minimum Value
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // 6. Sum of Array
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 7. Filter Array (e.g., filter values greater than 10)
  function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
  }
  
  // ===== MATHEMATICAL FUNCTIONS =====
  
  // 8. Factorial
  function factorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  // 9. Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // 10. Fibonacci Sequence (up to n terms)
  function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  }
  
  // ======= SAMPLE USAGE =======
  
  // String Functions
  console.log(reverseString("hello"));            // "olleh"
  console.log(countCharacters("hello world"));    // 11
  console.log(capitalizeWords("hello world"));    // "Hello World"
  
  // Array Functions
  console.log(findMax([5, 9, 2, 17, 3]));          // 17
  console.log(findMin([5, 9, 2, 17, 3]));          // 2
  console.log(sumArray([5, 9, 2, 17, 3]));         // 36
  console.log(filterArray([5, 9, 2, 17, 3], x => x > 5)); // [9, 17]
  
  // Math Functions
  console.log(factorial(5));                      // 120
  console.log(isPrime(7));                        // true
  console.log(fibonacci(7));                      // [0, 1, 1, 2, 3, 5, 8]
  