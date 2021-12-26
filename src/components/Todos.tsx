import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodoContext } from "../store/todo-context";
import TodoItems from "./TodoItems";

interface TodoProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul>
      {todoCtx.items.map((todo) => (
        <TodoItems
          onRemoveTodo={() => todoCtx.remooveTodoHandler(todo.id)}
          text={todo.text}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
