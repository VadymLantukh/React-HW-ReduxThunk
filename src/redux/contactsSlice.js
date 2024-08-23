import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        state => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
