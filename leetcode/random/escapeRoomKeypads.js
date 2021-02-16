'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numKeypadSolutions' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordlist
 *  2. STRING_ARRAY keypads
 */

function numKeypadSolutions(wordlist, keypads) {
    const results = [];
    const trie = {};
    
    // Create a trie using wordlist
    for (const word of wordlist) {
        let chars = new Set(word.split(''));
        
        chars = [...chars].sort();
        
        let curr = trie;
        
        for (let i = 0; i < chars.length; i++) {
            const c = chars[i];
            
            if (i === chars.length - 1) {
                if (!curr[c]) curr[c] = {done: 0};
                curr[c].done++;
            } else {
                if (!curr.hasOwnProperty(c)) curr[c] = {done: 0};
                curr = curr[c];
            }
        }
    }
        
    // Helper functions
    const getPermutations = (chars) => {
        const combos = [];
        const KEY = chars[0];
        
        // First Char only
        combos.push([KEY]);
        
        // All chars
        combos.push(chars.split('').sort());
        
        const getCombos = (length, remaining, curr = []) => {
            if (curr.length === length) {
                combos.push([...curr, KEY].sort());
                return;
            }
            
            for (let i = 0; i < remaining.length; i++) {
                getCombos(length, remaining.slice(i + 1), [...curr, remaining[i]]);
            }
        }
        
        // All combos must include KEY
        chars = chars.slice(1);
        
        // Get length 1 - 5, exclusive of first char
        for (let len = 1; len <= 5; len++) {
            getCombos(len, chars);
        }
        
        return combos;
    }
    
    const getWordCount = (combo) => {
        let curr = trie;
        
        for (let i = 0; i < combo.length; i++) {
            const char = combo[i];
            
            if (i === combo.length - 1) {
                return curr[char] ? curr[char].done : 0;
            }
            
            if (curr[char]) {
                curr = curr[char];
            } else {
                return 0;
            }
        }
    }
    
    // Search each keypad
    for (const keypad of keypads) {
        let count = 0;
        
        // Check all combinations of characters in trie (helper func)
        const combos = getPermutations(keypad);
        
        combos.forEach(combo => count += getWordCount(combo));
        
        results.push(count);
    }
    
    return results;
}

function main() {