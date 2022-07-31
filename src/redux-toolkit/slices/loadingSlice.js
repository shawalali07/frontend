import { createSlice } from '@reduxjs/toolkit';

export const loading = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoadingTrue: (state) => {
      state.loading = true;
    },
    setLoadingFalse: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoadingTrue, setLoadingFalse } = loading.actions;

export default loading.reducer;
