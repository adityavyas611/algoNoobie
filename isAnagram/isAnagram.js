const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
     const counter = {};
     for (let i = 0; i < s.length; i++){
         if (!counter[s[i]]) counter[s[i]] = 1;
         else counter[s[i]]++;
     }
     for (let j = 0; j < t.length; j++){
         if (!counter[t[j]]) return false;
         else counter[t[j]] --;
     }
     return true;
 };

 module.exports = isAnagram;