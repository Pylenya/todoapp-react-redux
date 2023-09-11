import { configureStore } from "@reduxjs/toolkit";
import sliceTodo from "./sliceTodo.js";
export default configureStore({
  reducer: {
    todo: sliceTodo,
  },
});
