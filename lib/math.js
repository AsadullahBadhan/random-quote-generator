/*
 *Title: Math library.
 *Description: Utility file to math related function.
 *Author: Asadullah Badhan inspired by Sumit Saha.
 *Date: 07/16/2023
 *
 */

// Math object - module scaffolding
const math = {};

// Get a random number both included
math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

// Export the math object
module.exports = math;
