import TodoList from "./components/TodoList";
import { useCallback, useState, useEffect } from "react";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = (e) => {
    setTodoList([{ id: v4(), name: textInput }, ...todoList]);

    setTextInput("");
  };

  const handleRemoveTodo = (id) => {
    const newTodoList = [...todoList];
    newTodoList.splice(id, 1);
    setTodoList(newTodoList);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodoList(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };


  const onCheckBtnClick = (id) => {
  //   setTodoList((prevState) =>
  //   prevState.map((todo) =>
  //     todo.id === id ? { ...todo, isCompleted: true } : todo
  //   )
  // );
  let updatedTodos = todoList.map(todo => {
    if (todo.id === id) {
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  });
  setTodoList(updatedTodos);
  }
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-gray-900 font-sans">
        <div className="bg-white rounded-2xl shadow p-6 m-4 h-3/4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <p className="text-grey-darkest text-center text-4xl">Todo List</p>
            <div className="flex mt-4">
              <input
                value={textInput}
                onChange={onTextInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button
                onClick={onAddBtnClick}
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-400"
              >
                Add
              </button>
            </div>
          </div>
          <div>
            <div className=" mb-4 items-center">
              <TodoList
                todoList={todoList}
                handleRemoveTodo={handleRemoveTodo}
                updateTodo={updateTodo}
                onCheckBtnClick={onCheckBtnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
