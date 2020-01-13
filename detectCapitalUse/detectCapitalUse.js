const detectCapitalUse = function(word) {
    if(word.toUpperCase() === word){
       return true;
   }
   
   if(word.toLowerCase() === word){
       return true;
   }
   
   if(word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase() === word){
       return true;
   }
   return false;
};

module.exports = detectCapitalUse;