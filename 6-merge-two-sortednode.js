/**
 * Definition for singly-linked list.
 */
var MergeTwoList;
(function (MergeTwoList) {
    var ListNode = /** @class */ (function () {
        function ListNode(val, next) {
            this.val = val === undefined ? 0 : val;
            this.next = next === undefined ? null : next;
        }
        return ListNode;
    }());
    function mergeTwoLists(list1, list2) {
        debugger;
        var myNode = new ListNode();
        var current = myNode;
        console.log("Before run par1: ", list1, "par2: ", list2);
        console.log("check while: ", list1 < list2);

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                console.count("1st Line: ");
                console.log("List 1 dotor current.next = list1 before==> current: ", current);

                current.next = list1;
                console.log('list 1 current ni : ', current);
                console.log('list 1 current next : ', current.next);
                list1 = list1.next;

                console.log("LIST (1): ", list1);
                console.log("");
            }
            else {
                console.count("2nd Line: ");
                current.next = list2;
                console.log('List 2 current ni: ', current);
                console.log('list 2 current next: ', current.next);
                list2 = list2.next;

                console.log("LIST (2): ", list2);
                console.log("");
            }
            current = current.next;
        }
        // anyone list is empty
        if (list1 !== null) {
            current.next = list1;
            console.log("LAST step list1:--> ", list1);
            console.log("LAST step list1 (current)=> ", current);
        }
        else {
            current.next = list2;
            console.log("LAST step list2 (current)=> ", current);
        }
        return myNode.next;
    }
    // Test case hiiw
    function printList(head) {
        var current = head;
        while (current !== null) {
            console.log('Current value is: ', current.val);
            current = current.next;
        }
    }
    // create sorted linked list
    var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    var list2 = new ListNode(1, new ListNode(2, new ListNode(3)));
    // Merge to linked list
    var mergedListRest = mergeTwoLists(list1, list2);
    printList(mergedListRest);
})(MergeTwoList || (MergeTwoList = {}));
