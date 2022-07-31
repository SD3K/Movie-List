import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    value: [{
      title: 'The Big Lebowski',
      year: 1998,
      genre: 'Comedy'
    },
    // {
    //   title: 'The Royal Tenenbaums',
    //   year: 2001,
    //   genre: 'Drama'
    // }
  ]
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    }
  }
});

export default movieSlice.reducer;
