//  Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, 
// so the output would be ['Man', 'I','Love','The','Matrix','*******'].
//  Then make your algorithm work for any word of your choice
 
//  pseudocode:
// defind an array x 
// write for loop that start from 0 and ends at the last index of array x.
// defind variable called test with value "program".
// defind variable called res with value "".
// write for loop that start from 0 and ends at the last index of variable test.
// replace each letter in the word Program with *.
// replace the index 'program' in the array x with the res.
// print the array x.

 
 var x = ['Man', 'I','Love','The','Matrix','Program'];
 
 for(var i= 0; i<= x.length-1; i++){
    var test = 'Program';
    var res = '';
 for(i=0; i<=test.length-1; i++){
     res += '*'
 }
 }
 x[x.length-1]= res
 console.log(x)
 
// digram:
// new var test = 'program'
// i = 0 => p = *
// i = 1 => r = *
// i = 2 => o = *
// i = 3 => g = *
// i = 4 => r = *
// i = 5 => a = *
// i = 6 => m = *