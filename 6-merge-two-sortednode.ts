/**
 * Definition for singly-linked list.
 */
namespace MergeTwoListnmspc {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const myNode = new ListNode();
    let current = myNode;

    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }

    // anyone list is empty
    if (list1 !== null) {
      current.next = list1;
    } else {
      current.next = list2;
    }
    return myNode.next;
  }

  // Test case hiiw
  function printList(head: ListNode | null) {
    let current = head;
    while (current !== null) {
      current = current.next;

      console.log('Current value is: ', current);
    }
  }

  // create sorted linked list
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));

  // Merge to linked list
  const mergedListRest = mergeTwoLists(list1, list2);
  printList(mergedListRest);
}
