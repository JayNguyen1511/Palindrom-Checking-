// Create a function to check palindrome string from input
function isPalindrome(str) {
    let strleng = str.length;
    for (let i = 0; i < strleng / 2; i++) {
      if (str.charAt(i) !== str.charAt(strleng - 1 - i)) {
        alert("This is NOT a palindrome string");
        break;
      } else {
        alert("This is a palindrome string");
        break;
      }
    }
  }
  