const climbStairs = function(n) {
  if (n < 3 && n >= 0) return n;

  let arr = [1, 2];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};

module.exports = climbStairs;