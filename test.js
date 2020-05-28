// function curryIt(fn) {
//   var n = fn.length
//   var args = []
//   return function (arg) {
//     args.push(arg)
//     if (args.length < n) {
//       console.log('callee', arguments.callee)
//       return arguments.callee
//     } else {
//       return fn.apply(this, args)
//     }
//   }
// }

// function add(a, b, c) {
//   return [a, b, c]
// }
// var c = curryIt(add)
// console.log('c', c)
// var c1 = c(1)
// console.log('c1', c1)
// var c2 = c1(2)
// console.log('c2', c2)
// var c3 = c2(3)
// console.log('c3', c3)

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 start')
}

console.log('script start')
setTimeout(() => {
  console.log('settimeout')
}, 0)
async1()
new Promise((resolve) => {
  console.log('promise1')
  resolve()
})
  .then(() => {
    console.log('promise2')
  })
  .then(() => {
    console.log('promise3')
  })
  .then(() => {
    console.log('promise4')
  })
console.log('script end')

// script start、 async1 start 、async2 start、 async1 end 、 promise1、promise2、promise3、promise4、script end 、settimeout
// script start、 async1 start 、async2 start、
