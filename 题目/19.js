/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let length = 0
    const dummyNode = new ListNode(0, head)
    let preNode = head
    // 逐个遍历节点，计算链表长度
    while (preNode) {
        length++
        preNode = preNode.next
    }
    // 计算出要删除节点的下标
    const deleteIndex = length - n
    preNode = dummyNode
    let i = -1
    // 找到要删除节点的前一个节点
    while (i !== deleteIndex - 1) {
        preNode = preNode.next
        i++
    }
    preNode.next = preNode.next.next
    return dummyNode.next
};

