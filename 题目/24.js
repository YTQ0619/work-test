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
var swapPairs = function(head) {
    if(!head)return null
    if(!head.next)return head
    let arr=[]
    while(head!==null){
        arr.push(head.val)
        head=head.next
    }
    let len=arr.length
    let result=new ListNode(-1)
    let tmp=result
    for(let i=0;i<len;i+=2){
        if(arr[i+1]!==undefined){
            tmp.next=new ListNode(arr[i+1])
            tmp=tmp.next
        }
        tmp.next=new ListNode(arr[i])
        tmp=tmp.next
    }
    return result.next
};

