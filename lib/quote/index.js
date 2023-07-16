/*
 *Title: Quote library.
 *Description: Utility file to load random quote.
 *Author: Asadullah Badhan inspired by Sumit Saha.
 *Date: 07/16/2023
 *
 */

// Dependencies
const fs = require('node:fs');

// Quote object - Module scaffolding
const quote = {};

// Get all quote and
quote.allQuotes = function allQuotes() {
    // Read quote from file
    const fileContents = fs.readFileSync(`${__dirname}\\quote.txt`, 'utf8');

    // Turn string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};

// Export the library
module.exports = quote;
