/**
 * 输入一个正整数target,输入所有和为target的连续正整数序列
 * (至少含有两个数)。序列内的数字有小到大排列，不同序列按照
 * 首个数字从小到大排列。
 * 示例：
 * 输入target=9
 * 输出:[[2,3,4],[4,5]]
 */

// function getList(target) {
//   if (!target) return null

//   let sum = 0
//   let list = []
//   let num_list = []
//   for (let i = 1; i < Math.ceil(target / 2); i++) {
//     sum = i
//     let c = i
//     while (sum < target) {
//       num_list.push(c)
//       c++
//       sum += c
//     }
//     if (sum > target) {
//       num_list = []
//     } else if (sum == target) {
//       num_list.push(c)
//       list.push(num_list)
//       num_list = []
//     }
//   }
//   return list
// }

// console.log(getList(15))

/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，
 * 计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额
 * 示例 1:
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 2:
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */

function getMoney(nums) {
  let steal = 0
  let preSteal = 0
  let noSteal = 0
  for (let num of nums) {
    steal = noSteal + num
    noSteal = Math.max(preSteal, noSteal)
    preSteal = steal
  }

  return Math.max(steal, noSteal)
}

console.log(getMoney([2, 7, 9, 3, 1]))
