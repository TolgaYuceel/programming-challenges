const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const oddNumb = []
const evenNumb = []

for(i=0; i<arr.length; i++) {
    if(arr[i] % 2 == 0) {
        evenNumb.push(arr[i])
    }else {
        oddNumb.push(arr[i])
    }
}

let total = 0
for(let n=0; n<evenNumb.length; n++) {
    total += evenNumb[n]
}

console.log(total)