import { createSlice } from "@reduxjs/toolkit";

const sliceTodo = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo(state, action) {
      if (action.payload.text.trim().length > 0) {
        state.todoList.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false,
        });
      }
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todoList.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    removeAllTodos(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.completed === false
      );
    },
  },
});
export const { addTodo, toggleTodoComplete, removeTodo, removeAllTodos } =
  sliceTodo.actions;
export default sliceTodo.reducer;
