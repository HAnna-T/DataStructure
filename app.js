import { LinkedList } from "./linked-list.js";
// Stack impementation
class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

//Queue implementation

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value)
  }
  dequeue() {
     return this.list.deleteHead()
  }
  isEmpty() {
    return !this.list.head;
  }
  toArray() {
    return this.list.toArray();
  }
}
