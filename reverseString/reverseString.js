function reverseString(OriginalString) {
    const ReverseString = [];
  
    const SplittedStringArray = OriginalString.split("");
  
    for (let i = SplittedStringArray.length - 1; i >= 0; i -= 1) {
      ReverseString.push(SplittedStringArray[i]);
    }
    return ReverseString.join("");
  }
  
  export { reverseString };