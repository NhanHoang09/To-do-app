
import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, handleRemoveTodo,onCheckBtnClick, updateTodo}) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} onCheckBtnClick={onCheckBtnClick} updateTodo={updateTodo} />
      ))}
    </>
  );
}