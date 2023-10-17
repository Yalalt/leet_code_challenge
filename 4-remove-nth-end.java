//Definition for singly-linked list.
class ListNode {
  int val;
  ListNode next;

  public ListNode() {}

  public ListNode(int val) {
    this.val = val;
  }

  public ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode myNode = new ListNode(0);
    myNode.next = head;

    // two pointer to reference to variables
    ListNode fast = myNode;
    ListNode slow = myNode;

    // fast zaagch n node head zaana
    for (int i = 0; i <= n; i++) {
      fast = fast.next;
    }

    // fast slow zaagch nar fastiig svvliin node deer ochih hurtel ywna
    while (fast != null) {
      fast = fast.next;
      slow = slow.next;
    }

    // svvliin node-iig ustgaad omnoh node zaana
    slow.next = slow.next.next;

    // return the modified head node
    return myNode.next;
  }
}