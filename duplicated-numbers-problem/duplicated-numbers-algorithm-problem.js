//Duplicate Numbers Algorithm Problem

function findDuplicates(arr) {
    var duplicates = [];
    var counts = {};

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (var key in counts) {
        if(counts[key] > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}


console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5]));// [2, 4, 5]
console.log(findDuplicates([1, 3, 1, 3, 4, 6, 5, 5, 5]));// [1, 3, 5]
console.log(findDuplicates([1, 8, 8, 4, 2, 7, 6, 6, 6]));// [6, 8]