const palindromes = function (word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    while ((left < right) && (isPunctuation(word[left])))
      left++;
    while ((left < right) && (isPunctuation(word[right])))
      right--;

    if (word[left].toLowerCase() !== word[right].toLowerCase())
      return false;

    left++;
    right--;
  }

  return true;
};

function isPunctuation(c) {
  const ascii = c.charCodeAt(0);
  if ( (ascii >= 32 && ascii <=47) || (ascii >=58 && ascii <=64) )
    return true;
}

// Do not edit below this line
module.exports = palindromes;
