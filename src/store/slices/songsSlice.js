import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    refPayload: [],
  },

  reducers: {
    increment: (state, action) => {
      state.value += 1;
      const index = state.refPayload.indexOf(action.payload);
      state.refPayload.splice(index, 1);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    extraReducers(builder) {
      builder.addCase("movie/reset", (state, action) => {
        return [];
      });
    },
  },
});
