// Write a program that takes an array of numbers and turns the negative values to strings.
//  For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].


var my_array = [7, -1, -2, 0, 1];
for(i=0; i<my_array.length; i++){
    if( my_array[i]< 0){
        my_array[i] = "negativ number"
    }
}
console.log(my_array)
