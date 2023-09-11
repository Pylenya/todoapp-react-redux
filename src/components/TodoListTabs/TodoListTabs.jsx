import React from "react";
import "./todolisttabs.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../store/sliceTodoTabs";
const TodoListTabs = () => {
  const todosArray = ["All", "Active", "Completed"];
  const dispatch = useDispatch();
  const active = useSelector((state) => state.active.active);
  return (
    <div className="todo__tabs">
      {todosArray.map((item, index) => {
        return (
          <span
            key={index}
            className={`${active === item ? "todo__tab active" : "todo__tab"}`}
            onClick={() => dispatch(setActive(item))}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default TodoListTabs;
