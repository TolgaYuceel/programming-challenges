//Longest Common Subsequence Problem

function lcs(str1, str2) {
    const compatibleValues = new Set();

    for(let i=0; i < str1.length; i++) {
        for(let a=0; a<str2.length; a++) {
            if(str1[i] === str2[a]) {
                compatibleValues.add(str1[i])
            }
        }
    }

    compatibleValues.forEach((value) => {
        console.log(value);
    });
}

lcs("ABCDGH", "AEDFHR")
console.log("--------------")
lcs("AGGTAB", "GXTXAYB")