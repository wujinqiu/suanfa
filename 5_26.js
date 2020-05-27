/**
 * 输入两个链表，找出它们的第一个公共节点
 * 注意：
 * 如果两个链表没有交点，返回null
 * 在返回结果后，两个链表仍须保持原有结构。
 * 假定整个链表结构中没有循环
 * 程序尽量满足O(n)时间复杂度，且仅用O(1)内存
 */
const getIntersectionNode = function (headA, headB) {
  //获取两个链表的长度
  let node = headA
  let lengthA = 0
  while (node) {
    ++lengthA
    node = node.next
  }
  if (!lengthA) return null

  node = headB
  let lengthB = 0
  while (node) {
    ++lengthB
    node = node.next
  }
  if (!lengthB) return null

  let diff = 0,
    slow,
    fast
  if (lengthA > lengthB) {
    slow = headA
    fast = headB
    diff = lengthA - lengthB
  } else {
    slow = headB
    fast = headA
    diff = lengthB - lengthA
  }

  while (diff--) {
    slow = slow.next
  }
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}
