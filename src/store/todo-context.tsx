import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodoHandler: (text: string) => void;
  remooveTodoHandler: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObject>({
  items: [],
  addTodoHandler: () => {},
  remooveTodoHandler: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((todo) => todo.concat(newTodo));
  };
  const remooveTodoHandler = (todoId: string) => {
    setTodos((todoSnapshot) =>
      todoSnapshot.filter((todo) => todo.id !== todoId)
    );
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodoHandler,
    remooveTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
