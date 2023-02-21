import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import types from '../types/'

const url = 'http://localhost:3000/api/v1/messages';

export const fetchGreeting = createAsyncThunk(
  types.FETCH_GREETING,
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Initial state
const initialState = {
  greetings: [],
  error: null,
  status: 'idle',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    greeting(state, action) {
      state.greetings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Im here');
        state.greetings = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { greeting } = greetingsSlice.actions;
export default greetingsSlice.reducer;

