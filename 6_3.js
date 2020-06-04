/**
 * 判断一个int整数是否自己的回文数，不能使用额外的空间来操作
 *
 *使用除法和求余获得对应位置的数字，无字符串操作。
 */
function isPalindrome(x) {
  if (x < 10) {
    return x > 0
  }
  let n = 10 ** Math.floor(Math.log10(x))
  while (n > 1 && x > 0) {
    if (x % 10 !== Math.floor(x / n)) {
      return false
    }
    x = Math.floor((x % n) / 10)
    n /= 100
  }

  return true
}
