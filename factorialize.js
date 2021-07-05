//Factorialize a Number
function factorialize(num) {
    let result = 1;

    while (num > 0) {
        result *= num;
        num -= 1;
    }

    return result;
}

console.log(factorialize(5));

// Diagram
// factorializa(0)  return = 1;
//factorialize(10)  return = 3628800;
//factorialize(20)  return =2432902008176640000;