import Node from "./Node";

interface INode {
  root: null | Node;
}

class BinarySearchTree implements INode {
  root: Node | null;

  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  insert(number: number) {
    const newNode = new Node(number);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: Node, newNode: Node) {
    if (newNode.number < node.number) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // if right is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  findMinNode(node: Node): Node {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  remove(number: number) {
    this.root = this.removeNode(this.root, number);
  }

  removeNode(node: Node | null, key: number) {
    if (node === null) return null;
    else if (key < node.number) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.number) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const aux = this.findMinNode(node.right);
      node.number = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  getRootNode() {
    return this.root;
  }
}

export default BinarySearchTree;
