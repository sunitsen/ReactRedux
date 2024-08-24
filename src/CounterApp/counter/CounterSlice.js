import { createSlice } from "@reduxjs/toolkit";

// Declare counterSlice using const
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByFive: (state, action) => {
        state.count = state.count + action.payload;
      },
    decrement: (state) => {
        state.count = state.count - 1;

    },
    
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export actions and reducer correctly
export const { increment, decrement, reset, incrementByFive } = counterSlice.actions;
export default counterSlice.reducer;
