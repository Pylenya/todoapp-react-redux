import { createSlice } from "@reduxjs/toolkit";

const sliceTodoTabs = createSlice({
  name: "todos",
  initialState: {
    active: "All",
  },
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const { setActive } = sliceTodoTabs.actions;
export default sliceTodoTabs.reducer;
