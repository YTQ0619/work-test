/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
 if (!l1) {
    return l2
  }
  if (!l2) {
      return l1
  }
  let newLink = {
    val: undefined,
    next: null
  }
  let new_p = newLink
  let p1 = l1
  let p2 = l2
  while(p1 && p2) {
    if (p1.val > p2.val) {
      new_p.next = p2
      p2 = p2.next
    } else {
      new_p.next = p1
      p1 = p1.next
    }
    new_p = new_p.next
  }

  new_p.next = p1 ? p1 : p2
  
  return newLink.next
};

