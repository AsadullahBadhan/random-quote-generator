/*
 *Title: Random Quote generator
 *Description: Simple node application that print random quotes per second interval.
 *Author: Asadullah Badhan inspired by Sumit Saha.
 *Date: 07/16/2023
 *
 */

// Dependencies
const quoteLibrary = require('./lib/quote');
const mathLibrary = require('./lib/math');

// App object - Module Scaffolding
const app = {};

// Configuration
app.config = {
    timeBetweenQuotes: 2000,
};

// print the quote
app.printQuote = function printQuote() {
    // Get all the quote
    const allQuotes = quoteLibrary.allQuotes();

    // Get the Quotes count
    const numberOfQuote = allQuotes.length;

    // Generate a random number between 1 and number of quote
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuote);

    // Get the selected quote
    const selectedQuote = allQuotes[randomNumber - 1];

    // Print the quote to console
    console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
