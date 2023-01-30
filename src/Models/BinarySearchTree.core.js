class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const maxValue = (root) => {
  let max = root.value;
  while (root.right !== null) {
    max = root.right.value;
    root = root.right;
  }
  return max;
};

const RNL = (root, Array) => {
  if (root) {
    RNL(root.right, Array);
    Array.push(root.value);
    RNL(root.left, Array);
  }
};

const checkID = (value1, value2) => {
  return value1.IDCode !== value2;
};

const NRL = (root, Array, valueID) => {
  if (root) {
    if (checkID(root.value, valueID)) Array.push(root.value);
    NRL(root.right, Array, valueID);
    NRL(root.left, Array, valueID);
  }
};
class BinaryTree {
  constructor() {
    this.root = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    const addSide = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };
    while (true) {
      if (value === current.value) {
        current.count++;
        return this;
      }
      if (value.disease.prioritized > current.value.disease.prioritized) addSide("left");
      else if (value.disease.prioritized === current.value.disease.prioritized) addSide("left");
      else addSide("right");
    }
  }
  find = (valueID) => {
    return this.Return().find((element) => element.IDCode === valueID);
  };
  remove = (valueID) => {
    if (this.find(valueID)) {
      const Data = [];
      var temp = this.find(valueID);
      NRL(this.root, Data, valueID);
      this.root = null;
      Data.forEach((element) => this.enqueue(element));
      return temp;
    }
    return null;
  };
  dequeue = () => {
    return this.remove(maxValue(this.root).IDCode);
  };
  Return = () => {
    const Data = [];
    RNL(this.root, Data);
    return Data;
  };
}

module.exports = BinaryTree;
