/* 
 * Title: Random MathNumber Library.
 * Description: This is an random Number generator that provides random number from between two number.
 * Author : Siam Al Rafi
*/


// number generator math object_

const math = {};


// Get a random integer between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
    let maximum = max;
    let minimum = min;

    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    return Math.floor(Math.random() * (maximum - minimum + 1) + min)
}


// exports Random number generator module.
module.exports = math;

