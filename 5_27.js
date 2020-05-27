/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针：next指向下一个节点，
 * 特殊指针random指向任意一个节点），返回的结果为复制后的 复杂链表的head
 */
class Node {
  constructor(val, next = null, random = null) {
    this.val = val
    this.next = next
    this.random = random
  }
}
const copyRandomList = function (head) {
  if (!head) return null

  let cur = head
  const newHead = new Node(cur.val)
  let newNode = newHead
  const map = new Map()
  map.set(cur, newNode)

  while (cur.next) {
    newNode.next = new Node(cur.next.val)
    cur = cur.next
    newNode = newNode.next
    map.set(cur, newNode)
  }

  newNode = newHead
  cur = head
  while (newNode) {
    newNode.random = map.get(cur.random)
    newNode = newNode.next
    cur = cur.next
  }

  return newHead
}
