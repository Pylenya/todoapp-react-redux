import React from "react";
import "./todolist.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeAllTodos } from "../store/sliceTodo";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = ({}) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const state = useSelector((state) => state.active.active);
  let todoListFiltred = [...todoList];
  if (state === "Active") {
    todoListFiltred = todoListFiltred.filter(
      (item) => item.completed === false
    );
  } else if (state === "Completed") {
    todoListFiltred = todoListFiltred.filter((item) => item.completed === true);
  }
  return (
    <div className="todo__list">
      {todoListFiltred.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
      {state === "Completed" && todoListFiltred.length > 0 && (
        <button
          onClick={() => dispatch(removeAllTodos())}
          className="delete-btn"
        >
          delete all completed todos
        </button>
      )}
    </div>
  );
};

export default TodoList;
