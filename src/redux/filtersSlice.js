import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { searchFilter } = slice.actions;
export const filterQuerySlice = slice.reducer;
