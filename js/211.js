/* https://leetcode.com/problems/design-add-and-search-words-data-structure/ */

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
