
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    let curr: TreeNode | null = root;

    while(curr !== null) {
        if(curr.left === null) {
            result.push(curr.val);
            curr = curr.right;
        } else {
            let previous: TreeNode | null = curr.left;
            while (previous.right !== null && previous.right !== curr) {
                previous = previous.right;
            }
            if(previous.right === null) {
                previous.right = curr;
                curr = curr.left;
            } else {
                previous.right = null;
                result.push(curr.val);
                curr = curr.right;
            }
        }
    }

    return result;
};