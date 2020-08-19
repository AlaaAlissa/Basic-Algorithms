// Given an array X, write a program that would find the maximum value of the array. 
// Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.


  
var my_array = [1, -4, 2, 0];
var max = my_array[0];

for( var i = 1 ; i < my_array.length; i++){
    if( max < my_array[i]){
        max = my_array[i];
    }
}
console.log(max);