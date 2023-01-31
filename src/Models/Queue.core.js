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

const removeHead = (queue) => {
  let queueTemp = new Queue();
  queueTemp = queue.next;
  return queueTemp;
};

const CheckID = (value1, value2) => {
  return value1.IDCode === value2.IDCode;
};

const removeNode = (queue, value) => {
  console.log(queue);
  if (!queue.next) return;
  if (CheckID(queue.next.value, value)) {
    queue.next = queue.next.next;
    return;
  }
  removeNode(queue.next, value);
};

class Queue {
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
  remove(value) {
    if (CheckID(this.queue.value, value)) {
      this.queue = removeHead(this.queue);
      return;
    }
    removeNode(this.queue, value);
  }
  Return() {
    const Array = [];
    getReturn(this.queue, Array);
    return Array;
  }
}

module.exports = Queue;
