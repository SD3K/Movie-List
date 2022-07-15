import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    value: {
      title: '',
      year: 0,
      genre: ''
    }
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    }
  }
});

export default movieSlice.reducer;
