/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head !== null) {
        if (head.next && head.val === head.next.val) {
            // 跳过所有重复节点
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next; // 跳过当前重复节点
        } else {
            prev = prev.next;
        }
        head = head.next;
    }

    return dummy.next;
};