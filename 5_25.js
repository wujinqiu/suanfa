//输入一个整数数组，实现一个函数来调整数组中数字的顺序，
//使得所有奇数位于数组的前半部分，所有的偶数位于数组的后半部分
let sort = function (arr) {
  const odd = arr.filter((item) => item % 2 === 1)
  const even = arr.filter((item) => item % 2 === 0)
  console.log(odd, even)
  return odd.concat(even)
}
