import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    token: 'shawal',
    username: '',
    email: '',
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    destroyToken: (state) => {
      state.token = '';
      state.username = '';
      state.email = '';
    },
  },
});

export const { setToken, destroyToken } = authSlice.actions;

export default authSlice.reducer;
