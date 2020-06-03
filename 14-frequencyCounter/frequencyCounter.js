function frequencyCounter(word) {
  // Insert code here;
 let frequency = {};

  for (var i = 0; i < word.length; i++) {
      let char = word.charAt(i);

      if (frequency[char]) {
         frequency[char]++;
      } else {
         frequency[char] = 1;
      }
  }

  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;