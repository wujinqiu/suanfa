function curryIt(fn) {
  var n = fn.length
  var args = []
  return function (arg) {
    args.push(arg)
    if (args.length < n) {
      console.log('callee', arguments.callee)
      return arguments.callee
    } else {
      return fn.apply(this, args)
    }
  }
}

function add(a, b, c) {
  return [a, b, c]
}
var c = curryIt(add)
console.log('c', c)
var c1 = c(1)
console.log('c1', c1)
var c2 = c1(2)
console.log('c2', c2)
var c3 = c2(3)
console.log('c3', c3)
