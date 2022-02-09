class TreeNode{
    data:number;
    leftChild:TreeNode = null;
    rightChild:TreeNode = null;

    constructor(data:number){
        this.data = data
    }
}

class BST {
    root: TreeNode = null;

    insert(data:number){
        let node = this.root
        if(node == null){
            this.root = new TreeNode(data)
            return
        } else{
            let searchTree = (node:TreeNode) => {
                if(data < node.data){
                    if(node.leftChild){
                        return searchTree(node.leftChild)
                    }else{
                        node.leftChild = new TreeNode(data)
                        return
                    }
                }else if(data > node.data){
                    if(node.rightChild){
                        return searchTree(node.rightChild)
                    }else{
                        node.rightChild = new TreeNode(data)
                        return
                    }
                }else{
                    console.log("같은 값이 있다")
                    return null
                }
            }
            searchTree(node)
        }
    }
}

const bst = new BST()

bst.insert(8)
bst.insert(3)
bst.insert(10)
bst.insert(1)
bst.insert(6)

console.dir(bst, {
    depth: 10
})
