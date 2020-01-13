const reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    s = s.split('');
    for(let i = 0, j = s.length - 1; i < j ;) {
        if(vowels.includes(s[i]) && vowels.includes(s[j])) {
           [s[i], s[j]] = [s[j], s[i]];
           i++; 
           j--;
        } else if(vowels.includes(s[i])) {
            j--;
        }else {
            i++;
        }
    }
    return s.join('');
};

module.exports = reverseVowels;