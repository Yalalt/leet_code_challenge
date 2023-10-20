public class 13-BinaryTreeInorderTraversal {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> nodes = new ArrayList<>();
        TreeNode curr = root;
        while(curr != null) {
            if(curr.left == null) {
                nodes.add(curr.val);
                curr = curr.right;
            } else {
                TreeNode prev = curr.left;
                while(prev.right != null && prev.right != curr) {
                    prev = prev.right;
                }
                if(prev.right == null) {
                    prev.right = curr;
                    curr = curr.left;
                } else {
                    prev.right = null;
                    nodes.add(curr.val);
                    curr = curr.right;
                }
            }
        }
        return nodes;
    }
}
