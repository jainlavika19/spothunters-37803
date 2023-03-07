import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { data: [] },
};

export const sampleSlice = createSlice({
  name: "sampleSliceData",
  initialState,
  reducers: {
    sampleSliceGetdata: (state, action) => {
      console.log("payload of sampleSliceGetdata", action?.payload);
      const stateData = [...(action?.payload || [])];
      state.value.data = stateData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sampleSliceGetdata } = sampleSlice.actions;

export default sampleSlice.reducer;
