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

    inOrder(){
        let visited:number[] = []
        const traverse = (node:TreeNode) => {
            if(node.leftChild) traverse(node.leftChild)
            visited.push(node.data)
            if(node.rightChild) traverse(node.rightChild)
        }
        traverse(this.root)
        return visited.join("->")
    }
    preOrder(){
        let visited:number[] = []
        const traverse = (node:TreeNode) => {
            visited.push(node.data)
            if(node.leftChild) traverse(node.leftChild)
            if(node.rightChild) traverse(node.rightChild)
        }
        traverse(this.root)
        return visited.join("->")
    }
    postOrder(){
        let visited:number[] = []
        const traverse = (node:TreeNode) => {
            if(node.leftChild) traverse(node.leftChild)
            if(node.rightChild) traverse(node.rightChild)
            visited.push(node.data)
        }
        traverse(this.root)
        return visited.join("->")
    }

}


const bst = new BST()

bst.insert(12)
bst.insert(5)
bst.insert(15)
bst.insert(13)
bst.insert(3)
bst.insert(1)
bst.insert(7)
bst.insert(9)
bst.insert(17)
bst.insert(19)

export{}