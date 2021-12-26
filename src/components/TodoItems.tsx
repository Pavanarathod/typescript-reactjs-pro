import React from "react";

interface TodoItemsProps {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItems: React.FC<TodoItemsProps> = ({ text, onRemoveTodo }) => {
  return <li onClick={onRemoveTodo}>{text}</li>;
};

export default TodoItems;
