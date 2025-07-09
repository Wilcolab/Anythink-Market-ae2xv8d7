function toKebabCase(input) {
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }
    // Trim, replace underscores/dashes/spaces with hyphens, collapse multiple, and lowercase
    return input
        .trim()
        .replace(/[\s_-]+/g, '-') // replace spaces, underscores, dashes with hyphen
        .toLowerCase();
}

// Example usage:
// console.log(toKebabCase("hello world")); // "hello-world"
// console.log(toKebabCase("  Hello__World--again  ")); // "hello-world-again"