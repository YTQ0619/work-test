/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // 第一步：复制节点并插入到原链表中
    let current = head;
    while (current) {
        const newNode = new _Node(current.val, current.next, null);
        current.next = newNode;
        current = newNode.next;
    }

    // 第二步：设置 random 指针
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    // 第三步：拆分链表
    const dummy = new _Node(0, null, null);
    let copyHead = dummy;
    current = head;
    while (current) {
        copyHead.next = current.next;
        current.next = current.next.next;
        copyHead = copyHead.next;
        current = current.next;
    }

    return dummy.next;
};