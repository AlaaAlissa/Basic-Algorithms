// 4. Fibonacci

// pseucode:
// defind an var called sum .
// write a function called fibo.
// write for loop that start from 0 and ends at 1000000.
// add i to sum every time and print the new sum.
// if the sum bigger than 1000000 than stop the for loop.
// run the function.


var sum = 0;
function fibo(){
    for ( var i = 0; i <=1000000; i++){
            sum = sum + i
        console.log(sum)
        if (sum >= 1000000){
            break
        }
    }
}

fibo()

// diagram:
// i = 0 => sum = 0 + 0 = 0 => print 0
// i = 1 => sum = 0 + 1 = 1 => print 0 , 1
// i = 2 => sum = 1 + 2 = 3 => print 0 , 1, 3
// i = 3 => sum = 3 + 3 = 6 => print 0 , 1, 3, 6 