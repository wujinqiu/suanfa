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

// 给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

// 对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max_num = Math.max(...candies)
  let arr = new Array(candies.length)
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max_num) {
      arr[i] = true
    } else {
      arr[i] = false
    }
  }
  return arr
}
