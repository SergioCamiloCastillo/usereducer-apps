import { useReducer, useState } from "react";

const types = {
  add: "add",
  update: "update",
  delete: "delete",
};

const initialTodos = [
  { id: 1, title: "Todo #1" },
  { id: 2, title: "Todo #2" },
];
const reducer = (state, action) => {
  if (action.type === types.delete) {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (action.type === types.add) {
    //nunca usar .push en reducer
    return [...state, action.payload];
  }
  if (action.type === types.update) {
    const todoEdit = action.payload;
    return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
  }
  return state;
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title: text };

    dispatch({ type: types.add, payload: newTodo });
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <ul>
        {todos.map((item) => (
          <li>
            {item.title}{" "}
            <button
              onClick={() => dispatch({ type: types.delete, payload: item.id })}
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.update,
                  payload: { ...todos, title: text },
                })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoApp;
