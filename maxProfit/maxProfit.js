const maxProfit = prices => {
  let min = prices[0];
  let max = 0;
  for (let profit of prices) {
    if (profit < min) min = profit;
    else if (profit - min > max) max = profit - min;
  }
  return max;
};

module.exports = maxProfit;