import { configureStore } from "@reduxjs/toolkit";
import sliceTodo from "./sliceTodo.js";
import sliceTodoTabs from "./sliceTodoTabs.js";
export default configureStore({
  reducer: {
    todo: sliceTodo,
    active: sliceTodoTabs,
  },
});
