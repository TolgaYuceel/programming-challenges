function evenTotal(arr) {
    let total = 0;

    for(let i=0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            total += arr[i];
        }
    }
    return total;
}

const arr = [1, 5, 3, 9, 2, 8];
const eventotal = evenTotal(arr)

console.log(eventotal)
