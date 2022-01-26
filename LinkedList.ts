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
        let i = 1
            let n = this.head
            while(n.next){
                if(i === idx){
                    console.log(this.head)
                    console.log(this.head.next)
                    console.log(n.next)
                    // console.log(n.next)
                    this.head = n.next.next
                    // n = n.next
                    // console.log(n.next.next)
                    // n.next = n.next.next
                    // console.log(this.head)
                    break
                }
                i++
                n = n.next
            }
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
const n1 = new ListNode(3)
const n2 = new ListNode(10)
const n3 = new ListNode(2)
const n4 = new ListNode(1)
linkedList.add(n1)
linkedList.add(n2)
linkedList.add(n3)
linkedList.add(n4)

const middleN = new ListNode(20)
linkedList.add(middleN, 3)
linkedList.delete(1)


const rr = linkedList.traverse()
console.log(rr)