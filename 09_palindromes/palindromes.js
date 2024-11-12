const palindromes = function (word) {
    cleanedWord = word.toLowerCase()
    wordArray = cleanedWord.split('').filter(char => char.match(/[^\W_]+/));
    reversedArray = wordArray.slice().reverse()
    if(wordArray.join('') === reversedArray.join('')) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
