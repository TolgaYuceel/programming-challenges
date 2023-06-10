//Fibonacci Loop
function fibonacci(n) {
    let result = []
    if (n === 0) {
        return result
    } 
    result.push(0)
    if (n == 1) {
        return result;
    }
    result.push(1)
    if (n == 2) {
        return result
    } 
    for(let i = 2; i < n; i++) {
        let temp = result[i - 1] + result[i - 2]; 
        result.push(temp); 
    }
    return result;
}

console.log(fibonacci(0));
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 
