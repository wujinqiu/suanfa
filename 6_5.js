/**
 * 同构字符串
 * 给定两个字符串s和t,判断他们是否是同构的。
 * 如果s中的字符可以被替换得到t。那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。
 * 两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * 示例：
 * 输入：s='egg',t='add'
 * 输出：true
 *
 * 输入：s=‘foo',t='bar'
 * 输出：false
 *
 * 输入：s='paper',t='title'
 * 输出：true
 */

let isIsonorphic = (s, t) => {
  let i = 0
  let s_index = '',
    t_index = ''
  while (i < s.length) {
    s_index = s.indexOf(s[i])
    t_index = t.indexOf(t[i])
    if (s_index != t_index) return false
    i++
  }
  return true
}

console.log(isIsonorphic('egg', 'add'))
console.log(isIsonorphic('‘foo', 'bar'))
console.log(isIsonorphic('paper', 'title'))

/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字
 * [
 * 	[1,2,3],
 * 	[4,5,6],
 * 	[7,8,9]
 * ]
 * 输出[1,2,3,6,9,8,7,4,5]
 */

var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return []
  }
  let width = matrix[0].length - 1
  let height = matrix.length - 1
  let w = 0,
    h = 0,
    output = []
  while (w < width && h < height) {
    for (let i = w; i < width; i++) {
      output.push(matrix[h][i])
    }
    for (let i = h; i < height; i++) {
      output.push(matrix[i][width])
    }
    for (let i = width; i > w; i--) {
      output.push(matrix[height][i])
    }
    for (let i = height; i > h; i--) {
      output.push(matrix[i][w])
    }
    width--
    h++
    height--
    w++
  }
  if (h == height) {
    for (let i = w; i <= width; i++) {
      output.push(matrix[h][i])
    }
  } else if (w == width) {
    for (let i = h; i <= height; i++) {
      output.push(matrix[i][width])
    }
  }
  return output
}
