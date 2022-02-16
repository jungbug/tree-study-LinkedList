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
    
    BFS(){
        let visited:TreeNode[] = []
        const queue:TreeNode[] = [this.root]
        while(queue.length){
            const node = queue.shift()
            visited.push(node)
            if(node.leftChild) queue.push(node.leftChild)
            if(node.rightChild) queue.push(node.rightChild)

        }
        return visited.map(v => v.data)
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