import React, { useEffect, useState } from "react";
import BinarySearchTree from "./BinarySearchTree";

type i = {
  number: number;
  left: null | { number: number; left: null; right: null };
  right: null | { number: number; left: null; right: null };
};
const HomePage = () => {
  const [nodes, setNodes] = useState<any>();

  const root = new BinarySearchTree();

  const handleUserKeyPress = (event: KeyboardEvent) => {
    if (event.code === "Space") {
      const number = Math.floor(Math.random() * (100 + 100 + 1) - 100);
      root.insert(number);
      const rootNodes = root.getRootNode();
      if (rootNodes) {
        setNodes(rootNodes);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  const traverse = (obj: { number: number; left: null; right: null }) => {
    if (obj.left) {
      traverse(obj.left);
    }

    if (obj.number) {
      return obj.number;
    }

    if (obj.right) {
      traverse(obj.right);
    }
  };

  const getNodes = () => {
    if (nodes) {
      traverse(nodes);
    }
  };

  return <div>{getNodes()}</div>;
};

export default HomePage;
