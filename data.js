const arr  = [1,"Lakhsmi",true]
arr.push(7.7)
arr.unshift("HEY")
arr.pop()
arr.shift()
//console.log(arr)

const obj = {
    name:"Lakhmi",
    age:24,
    Rollno:6, 
    Address:"Bangalore"
}

// STACK 

class Stack{
    constructor(){
        this.items = []
    }

    push(e){
        this.items.push(e)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items)
    }
}


const stack = new Stack()

//console.log(stack.isEmpty())
stack.push(10)
// console.log(stack.pop())
stack.push(10,20)
stack.push(20)
//stack.print()
//console.log(stack.peek())

//console.log(stack.size())

// QUEUE 

class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(ele){
          this.items[this.rear] = ele
          this.rear++
    }

    dequeue(){
       const item = this.items[this.front]
       delete this.items[this.front]
       this.front++
       return item
    }
}

const queue = new Queue()
queue.enqueue(10);
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.items)
queue.enqueue(10);

//console.log(queue.dequeue())
//console.log(queue.items)


