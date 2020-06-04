/**
 * 检查高度
 * 学校在拍年度纪念照时，一般要求学生按照非递减的高度顺序排列。
 * 请你返回能让所有学生以非递减高度排列的最小必要移动人数。
 * 当一组学生被选中时，他们之间可以以任何可能的方式重新排序，
 * 而未被选中的学生应该保持不动
 */
function heightChecker(heights) {
  let old = [...heights]
  let new_arr = heights.sort((a, b) => a - b)
  let count = 0
  new_arr.forEach((item, index) => {
    if (old[index] != item) count++
  })
  return count
}
