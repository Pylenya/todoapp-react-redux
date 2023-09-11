import React from "react";
import "./todoitem.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodoComplete, removeTodo } from "../store/sliceTodo";
import { AiFillDelete } from "react-icons/ai";
const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.active.active);
  return (
    <div className="todo__item" key={id}>
      <input
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id: id }))}
        className="checkbox"
        type="checkbox"
      />
      <span className={completed ? "todo__text completed" : "todo__text"}>
        {text}
      </span>
      {state === "Completed" && (
        <AiFillDelete
          onClick={() => dispatch(removeTodo({ id }))}
          className={"basket"}
        />
      )}
    </div>
  );
};

export default TodoItem;
