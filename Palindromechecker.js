function isPalindrome(str) {

    if (str.length === 0) {
        return true;
    }

    let newString = str.toLowerCase().match(/[a-z]/gi).join("");
    let left = 0;
    let right = newString.length - 1;

    while (left < right) {
        if (newString[left] !== newString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;

}

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false