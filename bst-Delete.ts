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

    delete(value:number){
        const removerNode = (node:TreeNode, data:number):TreeNode => {
            if(node == null) return null
            if(data == node.data){
                if(node.leftChild == null && node.rightChild == null){
                    return null
                }
                if(node.leftChild == null){
                    return node.rightChild
                }
                if(node.rightChild == null){
                    return node.leftChild
                }
                let tempNode = node.leftChild
                //predecessor(왼쪽에서 가장 큰거)
                while(tempNode.rightChild !== null){
                    tempNode = tempNode.rightChild
                }
                node.data = tempNode.data
                node.leftChild = removerNode(node.leftChild, tempNode.data)
                return node

                    // let tempNode = node.rightChild
                    // //successor(오른쪽 서브트리의 최솟값)
                    // while(tempNode.leftChild !== null){
                    //     tempNode = tempNode.leftChild
                    // }
                    // node.data = tempNode.data
                    // node.rightChild = removerNode(node.rightChild, tempNode.data)
                    // return node
            }else if(value < node.data){
                node.leftChild = removerNode(node.leftChild, data)
                return node
            }else if(value > node.data){
                node.rightChild =  removerNode(node.rightChild, data)
                return node
            }
        }
        this.root = removerNode(this.root, value)
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