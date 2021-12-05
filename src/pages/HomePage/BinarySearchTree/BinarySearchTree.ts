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

  getRootNode() {
    return this.root;
  }
}

export default BinarySearchTree;
