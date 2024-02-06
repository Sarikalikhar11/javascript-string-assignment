//2. Write a function capitalize that capitalizes the first letter of a given string.
function capitalize(inputString) {
  if (!inputString) {
    console.log('Please provide a valid input string.');
    return '';
  }
  const firstCharCode = inputString.charCodeAt(0);
  const capitalizedFirstChar = String.fromCharCode(firstCharCode - 32);

  const capitalizedString = capitalizedFirstChar + inputString.slice(1);

  return capitalizedString;
}
const originalString = 'hello, world!';
const capitalizedResult = capitalize(originalString);

console.log(`Original string: "${originalString}"`);
console.log(`Capitalized string: "${capitalizedResult}"`);

//3. Write a function capitalizeAll that capitalizes each word in a given sentence.
function capitalizeAll() {
  let str = 'sarika';
  console.log(str.toUpperCase());
}
capitalizeAll();

//4. Write a function isExist that checks if a given word is part of a given string.
let str = 'I love coding';
function isExist(word, str) {
  return str.indexOf(word) !== -1;
}
console.log(isExist('love', str));

//5. Write a function getOccurrenceCount that finds the number of occurrences of a word/phrase in a given string.

function getOccurrenceCount(inputString, word) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === word) {
      count++;
    }
  }
  return count;
}
const word = prompt('Enter your string');
const letterToCheck = prompt('Enter a letter to check');
const result = getOccurrenceCount(word, letterToCheck);
console.log(result);

//6. Write a function wordDensity that calculates the word density of a given string. Word density is defined as (occurrenceCount / totalWords) * 100.
function wordDensity(inputString) {
  if (!inputString) {
    console.log('Please provide a valid input string.');
    return 0;
  }
  const words = inputString.split(/\s+/);
  const totalWords = words.length;
  const wordCountMap = {};
  for (const word of words) {
    const lowercasedWord = word.toLowerCase();
    wordCountMap[lowercasedWord] = (wordCountMap[lowercasedWord] || 0) + 1;
  }
  const uniqueWords = Object.keys(wordCountMap).length;
  const wordDensityValue = (uniqueWords / totalWords) * 100;

  return wordDensityValue;
}

const inputString = 'This is an example. Example is a keyword in this example.';
const densityResult = wordDensity(inputString);
console.log(`The word density is: ${densityResult.toFixed(2)}%`);

//7. Write a function getExt that extracts the file extension from a given string representing a file name. If no extension is present, return null.
function getExt(fileName) {
  if (!fileName) {
    console.log('Please provide a valid file name.');
    return null;
  }
  const parts = fileName.split('.');
  if (parts.length > 1) {
    return parts[parts.length - 1].toLowerCase();
  } else {
    return null;
  }
}
const fileName1 = 'example.txt';
const fileName2 = 'image.jpg';
const fileName3 = 'document';

console.log(getExt(fileName1)); // Output: "txt"
console.log(getExt(fileName2)); // Output: "jpg"
console.log(getExt(fileName3)); // Output: null

//8. Write a function removeWhitespace that removes all whitespaces from a given string.
function removeWhitespace(inputString) {
  if (!inputString) {
    console.log('Please provide a valid input string.');
    return '';
  }
  const resultString = inputString.replace(/\s/g, '');

  return resultString;
}

const stringWithWhitespace = '  This is an example string with spaces.  ';
const stringWithoutWhitespace = removeWhitespace(stringWithWhitespace);

console.log(`Original string: "${stringWithWhitespace}"`);
console.log(`String without whitespace: "${stringWithoutWhitespace}"`);

//9. Write a function reverseWords that reverses the order of words in a given sentence.
function reverseWords(sentence) {
  if (!sentence) {
    console.log('Please provide a valid sentence.');
    return '';
  }
  const words = sentence.split(' ');

  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}
const originalSentence = 'This is an example sentence.';
const reversedSentence = reverseWords(originalSentence);

console.log(`Original sentence: "${originalSentence}"`);
console.log(`Reversed sentence: "${reversedSentence}"`);

//Write a function countVowels that counts the number of vowels in a given string.
function countVowels(inputString) {
  if (!inputString) {
    console.log('Please provide a valid input string.');
    return 0;
  }
  const vowelRegex = /[aeiou]/gi;

  const vowelMatches = inputString.match(vowelRegex);

  return vowelMatches ? vowelMatches.length : 0;
}

const exampleString = 'This is an example string with vowels.';
const vowelCount = countVowels(exampleString);

console.log(`The number of vowels in the string is: ${vowelCount}`);

//Write a function isPalindrome that checks if a given string is a palindrome.
function isPalindrome(inputString) {
  if (!inputString) {
    console.log('Please provide a valid input string.');
    return false;
  }
  const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  const reversedString = cleanString.split('').reverse().join('');

  return cleanString === reversedString;
}
const palindromeString = 'A man, a plan, a canal, Panama';
const nonPalindromeString = 'This is not a palindrome';

console.log(
  `"${palindromeString}" is a palindrome: ${isPalindrome(palindromeString)}`
);
console.log(
  `"${nonPalindromeString}" is a palindrome: ${isPalindrome(
    nonPalindromeString
  )}`
);

//Write a function truncateString that truncates a given string to a specified length and appends an ellipsis ("...").
function truncateString(inputString, maxLength) {
  if (!inputString || maxLength <= 0) {
    console.log(
      'Please provide a valid input string and a positive maxLength.'
    );
    return '';
  }
  if (inputString.length > maxLength) {
    const truncatedString = inputString.substring(0, maxLength) + '...';
    return truncatedString;
  } else {
    return inputString;
  }
}
const longString = 'This is a long string that needs to be truncated.';
const truncatedResult = truncateString(longString, 20);

console.log(`Original string: "${longString}"`);
console.log(`Truncated string: "${truncatedResult}"`);

//Write a function maskString that masks sensitive information in a string (e.g., credit card numbers, passwords).
function maskString(inputString, start, end, maskCharacter = '*') {
  if (
    !inputString ||
    typeof start !== 'number' ||
    typeof end !== 'number' ||
    start < 0 ||
    end > inputString.length ||
    start >= end
  ) {
    console.log('Please provide valid input parameters.');
    return '';
  }
  const lengthToMask = end - start;

  const maskedSubstring = maskCharacter.repeat(lengthToMask);
  const maskedString =
    inputString.slice(0, start) + maskedSubstring + inputString.slice(end);

  return maskedString;
}
const sensitiveData = '1234-5678-9012-3456';
const maskedResult = maskString(sensitiveData, 5, 14);

console.log(`Original string: "${sensitiveData}"`);
console.log(`Masked string: "${maskedResult}"`);

//Write a function validateEmail that checks if a given string is a valid email address.
function validateEmail(email) {
  if (!email) {
    console.log('Please provide a valid email address.');
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
const validEmail = 'example@example.com';
const invalidEmail = 'invalid-email';

console.log(
  `Is "${validEmail}" a valid email address? ${validateEmail(validEmail)}`
);
console.log(
  `Is "${invalidEmail}" a valid email address? ${validateEmail(invalidEmail)}`
);
