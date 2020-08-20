// 3rd Highest Number in Array

// pseudocode:
// defind arrat called x.
//sort the numbers inside the array form the biggest to the smallest.
// print the thirth index in array

// coding:
var x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
x.sort();
x.sort(function(a, b){
    return b - a;
});
console.log(x['2']);

// diagram:
// x.sort = [31, 20, 11, 9, 8, 7, 5, 3, 2, 0, -2]
// x['2'] = 11