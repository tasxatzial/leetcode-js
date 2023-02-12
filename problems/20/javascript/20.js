/* Approach: Stack

N = string length

Time complexity: O(N)
Space complexity O(N)
*/

let matchingBracket = (function() {
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    return map;
})();

/**
 * Returns true if the given string has properly matched brackets, false otherwise.
 * 
 * @param {string} s
 * @returns {boolean}
 */
let isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let currChar = s.charAt(i);
        if (matchingBracket.get(currChar) !== undefined) {
            stack.push(currChar);
        } else {
            let top = stack.pop();
            if (matchingBracket.get(top) !== currChar) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
