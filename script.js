 // 1.Print odd numbers in an array function
  
 function getOddNumbers(arr) {
    const oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumbersArray = getOddNumbers(numbers);
  console.log(oddNumbersArray); // Output: [1, 3, 5, 7, 9]


// 1.Print odd numbers in an array  anonyomus function
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (num) {
  if (num % 2 !== 0) {
    console.log(num);
  }
});




//2.Convert all the strings to title caps in a string array 
function toTitleCase(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  
  const stringArray = ["infanto", "ivan", "paul"];
  const titleCaseArray = stringArray.map(toTitleCase);
  
  console.log(titleCaseArray);
  



//3.Sum of all numbers in an array 
const numbers = [7,6,5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);



//4.Return all the palindromes in an array 
function isPalindrome(str) {
    // Function to check if a string is a palindrome
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  function findPalindromesInArray(arr) {
    // Function to find all palindromes in an array
    const palindromes = [];
    for (const element of arr) {
      if (isPalindrome(String(element))) {
        palindromes.push(element);
      }
    }
    return palindromes;
  }
  
  // Example usage:
  const inputArray = [121, 1331, 12321, 1234, 111, 1001];
  const result = findPalindromesInArray(inputArray);
  console.log("Palindromes in the array:", result);
  