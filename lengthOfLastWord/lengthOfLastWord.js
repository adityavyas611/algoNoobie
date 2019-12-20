const lengthOfLastWord = (s) => {
    return s.replace(/\s+$/, '').split(' ').pop().length;
};

module.exports = lengthOfLastWord;