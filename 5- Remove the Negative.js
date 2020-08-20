// 5. Remove the Negative

// pseucode:
// defind a array x.
// defind an empty array y.
// write for loop that start from 0 and ends at the last index.
// if the index equals or bigger than 0 than
// push the index to y array.
// print the array y.



var x = [1, -2, 4, 1];
var y = [];
for( var i = 0; i<x.length; i++){
    if( x[i] >= 0){
        y.push(x[i]);
    }
}
console.log(y);

// diagram:
// i=0 => x[0]=1 and 1>0 => result [1].
// i=1 => x[1]=-2 and -2<0 => result [1].
// i=2 => x[2]=4 and 4>0 => result [1, 4].
// i=3 => x[3]=1 and 1>0 => result [1, 4, 1].
// i=4 => stopt