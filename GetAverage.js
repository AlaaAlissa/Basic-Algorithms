// Given an array X, write a program that will return the average value of all elements in the array. 
// For example, for array X = [2,1,3] your output should be 2.


var my_array = [7,15,5];
var avr = 0;
for(i=0; i<my_array.length; i++){
    avr = avr + my_array[i];
}
avr /= my_array.length;
console.log(avr)

