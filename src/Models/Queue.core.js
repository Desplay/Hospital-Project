class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const addNode = (queue, node) => {
  if (!queue.next) {
    return (queue.next = node);
  }
  addNode(queue.next, node);
};

const getReturn = (queue, Array) => {
  if (queue) {
    Array.push(queue.value);
    getReturn(queue.next, Array);
  }
};

module.exports = class Queue {
  constructor() {
    this.queue = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.queue) {
      this.queue = newNode;
      return this;
    }
    addNode(this.queue, newNode);
  }
  dequeue() {
    const temp = this.queue.value;
    this.queue = this.queue.next;
    return temp;
  }
  Return() {
    const Array = [];
    getReturn(this.queue, Array);
    return Array;
  }
};
