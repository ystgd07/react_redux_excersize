import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

//componets 에서 사용 할 액션 ->dispatch(chnangeName(action.payload))
export const { changeName, changeCost } = formSlice.actions;

//스토어에 등록해야함!
export const formReducer = formSlice.reducer;
