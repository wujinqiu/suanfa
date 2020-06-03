/**
 * 给出一个链表，若其中包含环，请找出
 * 该链表的环的入口结点，否则，输出null
 */
function entryNodeOfLoop(phead) {
  if (!phead || !phead.next) {
    return null
  }
  let P1 = phead.next
  let P2 = phead.next.next

  //判断是否有环
  while (P1 != P2) {
    if (P2 === null || P2.next === null) {
      return null
    }
    P1 = P1.next
    P2 = P2.next.next
  }
  //获取环的长度
  let temp = P1
  let length = 1
  P1 = P1.next
  while (temp != P1) {
    length++
    P1 = P1.next
  }

  //寻找公共节点
  P1 = P2 = phead
  while (length-- > 0) {
    P2 = P2.next
  }
  while (P1 != P2) {
    P1 = P1.next
    P2 = P2.next
  }

  return P1
}
