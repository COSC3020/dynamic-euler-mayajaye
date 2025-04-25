//Maya Conway
//code.js
//Dynamic Euler
//4-24-25

//now they are iterative to avoid recomputing the factorial
function factorial(n) {
    let facto = 1;
    for (let i = 2; i <= n; i++) facto *= i; 
    return facto;
}

function e(n) {
    let euler = 1.0;
    let facto = 1;
    for (let i = 1; i <= n; i++) {
        facto *= i; //builds factorial along with euler
        euler += 1.0 / facto;
    }
    return euler;
}


