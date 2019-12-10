const Promise1 = (data) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => resolve(data),2000);
})
}

module.exports = Promise1;