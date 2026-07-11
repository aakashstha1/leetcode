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
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

function arrayToList(arr){
    let dummy = new ListNode(0);
    let curr = dummy;
    for (const v of arr){
        curr.next = new ListNode(v);
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head){
    let res=[];
    while(head){
        res.push(head.val);
        head=head.next;
    }
    return res;
}

var mergeTwoLists = function(list1, list2) {

    let dummy=new ListNode(0);
    let curr=dummy;
    while(list1 && list2){
        if(list1.val<=list2.val){
           curr.next=list1;
           list1=list1.next;
        }else{
            curr.next=list2;
            list2=list2.next;
           
        }
        curr=curr.next;
    }
    curr.next = list1!==null?list1:list2;
    return dummy.next;
};

l1=arrayToList([1,2,3]);
l2=arrayToList([1,3,4]);

const merged = mergeTwoLists(l1,l2);

console.log(listToArray(merged));