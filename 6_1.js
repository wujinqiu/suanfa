/**
 * 给定一个正整数n,将其拆分为至少两个正整数的和，
 * 并使这些整数的乘积最大化。返回你获得的最大乘积。
 */

var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(1)
  for (let i = 3; i <= n; i++) {
    for (let c = 1; c < i; c++) {
      dp[i] = Math.max(dp[i], c * (i - c), c * dp[i - c])
    }
  }
  console.log(dp[n])
  return dp[n]
}

integerBreak(7)
