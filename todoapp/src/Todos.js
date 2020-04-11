import React from 'react';

const Todos = ({ todos, handleDeleteTodo }) => {
  const todoList =
    todos.length > 0 ? (
      todos.map((todo) => {
        return (
          <div
            className=" collection-item center-align blue lighten-1"
            id="todo.id"
          >
            <span
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
            >
              {todo.content}
            </span>
          </div>
        );
      })
    ) : (
      <p className="center-align purple accent-3">
        You have no todo's left, Yay!!!
      </p>
    );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
