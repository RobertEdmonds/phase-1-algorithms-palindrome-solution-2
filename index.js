function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
  for(let i=0;i<word.length/2;i++){
    const j = word.length - 1 - i
    const startWord = word[i]
    const endWord = word[j]
    if(startWord !== endWord)
      return false
    
  }
  return true
  // check each letter to match the letter at the end
  // if they don't match return false
  // if they do return true
}

/* 
  Add your pseudocode here
  iterate from the beginning to the middle
  check each letter to match the letter at the end
  if they don't match return false
  if they do return true
*/

/*
  Add written explanation of your solution here
  First letter matches the last letter and the second letter equal the second to last letter until the middle
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("Expecting: True");
  console.log("=>", isPalindrome("romor"));
}

module.exports = isPalindrome;
