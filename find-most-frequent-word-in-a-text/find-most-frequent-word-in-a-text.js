//Algorithm to identify the most frequent word in a text.

const text = "We had a lot of nice times together It was really good times I really miss those times"
const words = text.split(" ")

const count_words = {}
let mostFrequentWord = null;
let maxNumb = 0;

words.forEach(function(word) {
    if(word in count_words) {
        count_words[word]++;
    } else {
        count_words[word] = 1;
    }

    if(count_words[word] >= maxNumb) {
        maxNumb =  count_words[word];
        mostFrequentWord = word;
    }
})

console.log("Most Frequent Word: " + mostFrequentWord);
console.log("Count Word: " + maxNumb)