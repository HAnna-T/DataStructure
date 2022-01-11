import { LinkedList } from "./linked-list";
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
