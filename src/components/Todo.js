import React from "react";

export default function Todo({ todo, handleRemoveTodo, onCheckBtnClick, updateTodo }) {
  return (
    <div className="flex mb-4">
      <div
        className="w-full text-grey-darkest"
        onClick={() => onCheckBtnClick(todo.id)}
      >
        {todo.name}
      </div>

      {todo.isCompleted || (
        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400">
          Done
        </button>
      )}

      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-400"
        onClick={() => handleRemoveTodo(todo.id)}
      >
        Remove
      </button>
      {/* <button onClick={() => updateTodo(todo.id)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400">
          Edit
        </button> */}
    </div>
  );
}
