function isPalindrome(word) {
  let j = word.length -1
  for(let i = 0; i < word.length/2; i++)
  if(word[i] != word[j] ){
    return false;
  } else{
    return true;
  }
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  function name isPalindrome with a string argument and returns true if the 
  the string is a palindrome and false if not 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  let word1 = 'ceec'
  let word2 = 'cook'
  console.log(isPalindrome(word1))
  console.log(isPalindrome(word2))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
