const Promise2  = (data) => {
    return new Promise((resolve, reject) => {
      if (isNaN(data)) {
          reject('error')
      }else if (data % 2 !== 0) {
          setTimeout(() => {
            resolve("odd");
          }, 1000);
        } else {
          setTimeout(() => {
            reject("even");
          }, 2000);
        }
    });
  }
  
module.exports = Promise2;
  