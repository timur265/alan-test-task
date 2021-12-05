interface INode {
  number: number;
  left: null;
  right: null;
}

class Node implements INode {
  number: number;
  left: null;
  right: null;

  constructor(number: number) {
    this.number = number;
    this.left = null;
    this.right = null;
  }
}
export default Node;
