/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // 找到反转区间的前一个节点
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let start = prev.next;
    let end = start;
    let nextNode = null;

    // 反转区间内的节点
    for (let i = left; i <= right; i++) {
        const temp = end.next;
        end.next = nextNode;
        nextNode = end;
        end = temp;
    }

    // 拼接链表
    prev.next = nextNode;
    start.next = end;

    return dummy.next;
};