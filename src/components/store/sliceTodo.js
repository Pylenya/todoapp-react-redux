import { createSlice } from "@reduxjs/toolkit";

const sliceTodo = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {},
});

export default sliceTodo.reducer;
