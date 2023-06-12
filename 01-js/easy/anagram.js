/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//First Method
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let temp = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1.includes(str2[i])) {
      temp = true;
    } else {
      temp = false;
    }
  }
  return temp;
}

//Second Method
function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  let temp = false;
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i] !== -1)) {
      temp = true;
    } else {
      temp = false;
    }
  }
  return temp;
}

console.log(isAnagram("rasp", "spar"));

console.log(isAnagram2("rasp", "spdfar"));
// module.exports = isAnagram;

/*Scenerio :
 1. first both string must have length will be same .
 2. check every letter is present to other .


*/
