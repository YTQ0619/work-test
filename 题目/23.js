/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let dummy = new ListNode(-1)
    let start = dummy
    let idx = 0;
    // 遍历过程中不断判断lists是否为空
    while (lists.length) {
        // 清理掉已经移到尾部的元素，便于结束while循环
        lists = lists.filter(ele => ele !== null);

        // 找到最小值
        let minVal = Math.min(...lists.map(ele => ele.val))
        for (var i = 0; i < lists.length; i++) {
            let curr = lists[i];
            let curr_next = lists[i].next
            if (lists[i].val === minVal) {
                // 采用新建的方式，start后面追加新节点
                start.next = new ListNode(minVal)
                start = start.next
                lists[i] = lists[i].next
            }
        }
    }

    return dummy.next
};

