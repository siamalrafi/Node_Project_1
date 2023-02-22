/* 
 * Title: Quotes Generator library
 * Description: This is a simple library that provides random Quotes form an specific text file.
 * Author: Siam Al Rafi
*/


// Dependencies
const fs = require('fs');

// get Random Quotes generator object
const quotes = {};


// get the all quotes and return them to the user
quotes.allQuote = function allQuote() {
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
};


// export quotes.
module.exports = quotes;
