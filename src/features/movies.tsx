import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    value: [
      {
        title: "The Big Lebowski",
        year: 1998,
        genre: "Comedy",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add } = movieSlice.actions;

export default movieSlice.reducer;
