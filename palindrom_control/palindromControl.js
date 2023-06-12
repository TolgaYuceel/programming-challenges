//Palindrom Control

function isPalindrom(string) {
    str = [...string].reverse().join("");
    if(string === str)  {
        console.log(true)
    }else {
        console.log(false)
    }
}

isPalindrom("madam"); // true
isPalindrom("level"); // true
isPalindrom("hello"); // false
isPalindrom("12321"); // true