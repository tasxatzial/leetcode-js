/* Approach: Trie

N = word length

Time complexity:
    add: O(N)
    search: O(N)
Space complexity:
    add: O(N)
    search: O(1)
*/

var WordDictionary = function() {
    this.wordict = {};
};

/** 
 * Adds the given word to the dictionary.
 * 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let splitWord = word.split('');
    let curr = this.wordict;
    for (let i = 0; i < splitWord.length; i++) {
        if (curr[splitWord[i]] === undefined) {
        curr[splitWord[i]] = {};
        }
        curr = curr[splitWord[i]];
    }
    curr['*'] = '';
};

/** 
 * Returns true if the given word is found in the dictionary, false otherwise.
 * 
 * @param {string} word
 * @return {boolean}
 */
 WordDictionary.prototype.search = function(word) {
    return searchMulti(word, this.wordict);
};
  
/**
 * Returns true if the given word is found in the dictionary, false otherwise.
 * 
 * Dictionary is and object that represents a trie structure. For example:
 * {t: {o: {*: '', y: {*: ''}}}
 * contains the words 'to' and 'toy'. '*' signifies the end of a word.
 * 
 * @param {string} word 
 * @param {Object} dictionary 
 * @returns 
 */
let searchMulti = function(word, dictionary) {
    let curr = dictionary;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '.') {
            let letters = Object.keys(curr);
            let splitWord = word.substring(i + 1);
            for (let j = 0; j < letters.length; j++) {
                if (letters[j] === '*') {
                    continue;
                }
                let newWord = letters[j] + splitWord;
                if (searchMulti(newWord, curr) === true) {
                    return true;
                }
            }
            return false;
        }
        if (curr[word[i]] === undefined) {
            return false;
        }
        curr = curr[word[i]];
    }
    return curr['*'] === '';
}
