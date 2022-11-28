class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.count = 0;
  }
}

const kthSmallestNode = (node) => {
  while (!node.left === null) node = node.left;
  return node;
};

const removeNode = (root, value) => {
  if (root === null) return root;
  if (value === root.value.IDCode) {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      let tempNode = kthSmallestNode(root.right);
      root.value = tempNode.value.IDCode;
      root.right = removeNode(root.right, tempNode.value);
      return root;
    }
  } else if (value < root.value) {
    root.left = removeNode(root.left, value);
    return root;
  } else {
    root.right = removeNode(root.right, value);
    return root;
  }
};

const maxValue = (root) => {
  let max = root.value;
  while (root.right !== null) {
    max = root.right.value;
    root = root.right;
  }
  return max;
};

const findInRoot = (root, value) => {
  if (!root) return undefined;
  let current = root;
  found = false;
  while (current && !found) {
    if (value < current.value.IDCode) current = current.left;
    else if (value > current.value.IDCode) current = current.right;
    else found = true;
  }
  if (!found) return null;
  return current;
};

const RNL = (root, Array) => {
  if (root) {
    RNL(root.right, Array);
    Array.push(root.value);
    RNL(root.left, Array);
  }
};

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }
  create(value) {
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
      if (value.disease.prioritized < current.value.disease.prioritized) addSide("left");
      else addSide("right");
    }
  }
  find = (value) => {
    return findInRoot(this.root, value);
  };
  remove = (value) => {
    if (this.find(value)) {
      removeNode(this.root, value);
      return value;
    }
    return null;
  };
  shift = () => {
    this.remove(maxValue(this.root));
  };
  Return = () => {
    const Data = [];
    RNL(this.root, Data);
    return Data;
  };
};
