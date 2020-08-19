// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
//  When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].


// pseudocode:
// defind an array array_x.
// defind an empty array array_y.
// write for loop that start from the last index in array array_x en ends in index 0.
// push the index to the array_y

// codeing
var array_x = [2, 1, 6, 4, -7];
var array_y = [];

 for ( var i = array_x.length-1; i >= 0; i--) {
    array_y .push (array_x[i]);
 }
 
    console.log(array_y);

// diagram:
// i = 4 => push the index number 4 in array_x to the first insex in array_y
// i = 3 => push the index number 3 in array_x to the second insex in array_y
// i = 2 => push the index number 2 in array_x to the third insex in array_y
// i = 1 => push the index number 1 in array_x to the fourth insex in array_y
// i = 0 => push the index number 0 in array_x to the fifth insex in array_y
