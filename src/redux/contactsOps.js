import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66c770f5732bf1b79fa68c2a.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  '"contacts/fetchAll"',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      await axios.post('/contacts', body);
      thunkAPI.dispatch(fetchContactsThunk());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
