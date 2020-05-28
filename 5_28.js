/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 */
class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

function merge(node1, node2) {
  if (node1 == null) {
    return node2
  } else if (node2 == null) {
    return node1
  }

  let list = null

  if (node1.val <= node2.val) {
    list = node1
    list.next = merge(node1.next, node2)
  } else {
    list = node2
    list.next = merge(node1, node2.next)
  }
  return list
}
