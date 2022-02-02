class ListNode {
    data: number
    next: ListNode | null

    constructor(data:number, next?:ListNode){
        this.data = data
        this.next = next || null
    }
}

class LinkedList{
    head:ListNode = new ListNode(0)
    cur:ListNode

    constructor(){
        this.cur = this.head
    }

    add(node:ListNode, idx:number=0){
        if(idx === 0){
            this.cur.next = node
            this.cur = this.cur.next
        } else{
            let i = 1
            let n = this.head
            while(n.next){
                if(i === idx){
                    node.next = n.next    
                    n.next = node
                    break
                }
                i++
                n = n.next
            }
        }
    }

    delete(idx:number){
        let i = 0
        let n = this.head
        while(n.next){
            if(i === idx-1){
                n.next = n.next.next
                return true
            }
            i++
            n = n.next
        }
        throw new Error("추가를 못함")
    }

    traverse(){
        let n = this.head
        let innerData:number[] = []
        while(n.next){
            n = n.next
            innerData.push(n.data)
        }
        return innerData.join('->')
    }

    // getter
    get lastNode(){
        return this.cur
    }
}

const linkedList = new LinkedList()
const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(3)
const n4 = new ListNode(4)
linkedList.add(n1)
linkedList.add(n2)
linkedList.add(n3)
linkedList.add(n4)

// const middleN = new ListNode(20)
// linkedList.add(middleN, 3)
linkedList.delete(5)


const rr = linkedList.traverse()
console.log(rr)