/**
 * Converts a given string to camelCase.
 *
 * - Trims leading and trailing whitespace.
 * - Treats spaces, dashes, and underscores as word separators.
 * - The first word is lowercased as-is; subsequent words are capitalized and concatenated.
 * - If the input is a single word, returns it unchanged.
 * - Throws an error if input is null, undefined, or not a string.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If input is null, undefined, or not a string.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * toCamelCase(' multiple words_here-now '); // 'multipleWordsHereNow'
 * toCamelCase('hello'); // 'hello'
 * toCamelCase(42); // Throws error
 */

/**
 * Converts a given string to dot.case (lowercase words separated by dots).
 *
 * - Trims leading and trailing whitespace.
 * - Treats spaces, dashes, and underscores as word separators.
 * - Converts all words to lowercase and joins them with dots.
 * - If the input is a single word, returns it in lowercase.
 * - Throws an error if input is null, undefined, or not a string.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If input is null, undefined, or not a string.
 *
 * @example
 * toDotCase('hello world'); // 'hello.world'
 * toDotCase(' multiple words_here-now '); // 'multiple.words.here.now'
 * toDotCase('hello'); // 'hello'
 * toDotCase(42); // Throws error
 */
function toCamelCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof input !== 'string') {
        throw new Error(`Input must be a string. Received type: ${typeof input}`);
    }

    // Trim whitespace
    let str = input.trim();

    // Replace multiple separators (space, dash, underscore) with a single space
    str = str.replace(/[\s\-_]+/g, ' ');

    // If the string is empty after trimming and replacing, return empty string
    if (str.length === 0) return '';

    // Split into words
    const words = str.split(' ');

    // If only one word, return as-is
    if (words.length === 1) return words[0];

    // Convert to camelCase
    const camelCased = words[0] +
        words
            .slice(1)
            .map(word =>
                word.length === 0
                    ? ''
                    : word[0].toUpperCase() + word.slice(1)
            )
            .join('');

    return camelCased;
}

// Example usage:
// console.log(toCamelCase('hello world')); // 'helloWorld'
// console.log(toCamelCase(' multiple words_here-now ')); // 'multipleWordsHereNow'
// console.log(toCamelCase('hello')); // 'hello'
// toCamelCase(42); // Throws error

module.exports = toCamelCase;

function toDotCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof input !== 'string') {
        throw new Error(`Input must be a string. Received type: ${typeof input}`);
    }

    // Trim whitespace
    let str = input.trim();

    // Replace multiple separators (space, dash, underscore) with a single space
    str = str.replace(/[\s\-_]+/g, ' ');

    // If the string is empty after trimming and replacing, return empty string
    if (str.length === 0) return '';

    // Split into words
    const words = str.split(' ');

    // Convert all words to lowercase and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('hello world')); // 'hello.world'
// console.log(toDotCase(' multiple words_here-now ')); // 'multiple.words.here.now'
// console.log(toDotCase('hello')); // 'hello'
// toDotCase(42); // Throws error

module.exports.toDotCase = toDotCase;