// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. 


// pseudocode:
// write for loop that start from 200 and ends at 2700.
// if the result of dividing the number by 3 equals 0 or if the result of dividing the number by 5 equals 0.
// than check the secand condition : if the result of dividing the number by 3 net equals 0 or if the result of dividing the number by 5 net equals 0.
// print i

// coding:
for(var i = 200; i<= 2700; i++){
    if( i % 3 == 0  || i % 5 == 0  ) {
        if (i % 3 !== 0 || i % 5 !== 0){
            console.log(i)
        }
      }
    }

// diagram:
// i = 200 => 200 % 3 !== 0 but 200 % 5 == 0, print i 
// i = 201 => 200 % 3 !== 0 but 200 % 5 == 0, print i


// a nother way for coding:
// for(var i = 200; i<= 2700; i++){
//     if( i % 3 == 0  && i % 5 !== 0 ){
//         console.log(i)
//     }
//     if( i % 3 !== 0  && i % 5 == 0 ){
//         console.log(i)
//     }
    
// }