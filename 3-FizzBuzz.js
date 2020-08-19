// 3. FizzBuzz

// pseucode:
// defind an empty array x
// write for loop that start from 1 and ends at 135.
// if the rest of deviding the number by 3 equals to 0 => push "Fizz".
// if the rest of deviding the number by 5 equals to 0 => push "Buzz".
// if the rest of deviding the number by 3 and 5  equals to 0 => push "FizzBuzz".
// print the array.

var x = [];
for( var i = 1; i <= 135; i ++){
    if(i % 3 == 0){
        x.push (["Fizz"]);
    }
    if(i % 5 == 0){
        x.push (["Buzz"]);
    }
    if(i % 3 == 0 && i % 5 == 0){
        x.push (["FizzBuzz"]);
    }
    else if ( i % 3 !== 0 && i % 5 !== 0 ){
        x.push([i])
    }
}
console.log(x)

// diagram:
// i = 1 => 1 % 3 !==0 & 1 % 5 !== 0 => push [i] 
// i = 2 => 2 % 3 !==0 & 2 % 5 !== 0 => push [i] 
// i = 3 => 3 % 3 ==0 & 3 % 5 !== 0 => push ["Fizz"] 
// i = 4 => 4 % 3 !==0 & 4 % 5 !== 0 => push [i] 
// i = 5 => 5 % 3 !==0 & 5 % 5 == 0 => push ["Buzz"]
