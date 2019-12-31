const maxProfit = (prices) => {
  let min = prices[0], max = 0;
 for (let p of prices) {
   if (p < min) min = p;
   else if (p - min > max) max = p - min;
 }
 return max;
};

module.exports = maxProfit;