/**
 * 输入一个正整数target,输入所有和为target的连续正整数序列
 * (至少含有两个数)。序列内的数字有小到大排列，不同序列按照
 * 首个数字从小到大排列。
 * 示例：
 * 输入target=9
 * 输出:[[2,3,4],[4,5]]
 */

function getList(target) {
  if (!target) return null

  let sum = 0
  let list = []
  let num_list = []
  for (let i = 1; i < Math.ceil(target / 2); i++) {
    sum = i
    let c = i
    while (sum < target) {
      num_list.push(c)
      c++
      sum += c
    }
    if (sum > target) {
      num_list = []
    } else if (sum == target) {
      num_list.push(c)
      list.push(num_list)
      num_list = []
    }
  }
  return list
}

console.log(getList(3))

// let sum = 0
// let map = { 0: 0 }
// let len = Math.round(target / 2)
// let numarr = new Array(length + 1)
// let rs = []
// for (let i = 1; i < length; i++) {
//   numarr[i] = i
//   sum += i
//   let diff = sum - target
//   if (map[diff] != undefined) {
//     rs.push(numarr.slice(map[diff] + 1, i + 1))
//   }
//   map[sum] = i
// }

// return rs
