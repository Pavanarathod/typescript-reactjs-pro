import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/todo-context";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enterdText = todoInputRef.current!.value;
    if (enterdText.trim().length === 0) {
      return;
    }

    todoCtx.addTodoHandler(enterdText);

    todoInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
