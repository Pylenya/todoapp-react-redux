import React from "react";
import "./input.scss";
import { useState } from "react";
import { addTodo } from "../store/sliceTodo.js";
import { setActive } from "../store/sliceTodoTabs";
import { useDispatch, useSelector } from "react-redux";
const Input = ({}) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo({ text: text }));
      setText("");
      dispatch(setActive("All"));
    }
  };
  return (
    <div className="todo__input">
      <input
        className="input"
        type="text"
        placeholder={"add details"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          dispatch(addTodo({ text: text }));
          setText("");
          dispatch(setActive("All"));
        }}
        className="btn"
      >
        Add
      </button>
    </div>
  );
};

export default Input;
