// Print Odd Numbers 1 - 135

// pseudocode:
// write for loop from 1 and ends at 135.
// if the result of dividing the number by 2 equals 1
// than print the number i 

for(var i=1; i<=135; i++){
    if(i % 2 == 1 ){
        console.log(i)
    }
}

// diagram:
// i = 1 => 1 % 2 = 1 => result = 1
// i = 2 => 2 % 2 = 0 => result = 1
// i = 3 => 3 % 2 = 1 => result = 1 , 3
// i = 4 => 4 % 2 = 0 => result = 1 , 3
// i = 5 => 5 % 2 = 1 => result = 1 , 3 , 5