import { createSlice } from "@reduxjs/toolkit";

 

export const GeneralSlice = createSlice({
  name: "general",
  initialState: {
    param: "",
    param1: "",
    doc_file: "",
  },
  reducers: {
    setFirstParam: (state, action) => {
      state.param = action.payload;
    },
    setFirstParam1: (state, action) => {
      state.param1 = action.payload;
    },
    setDocFile: (state, action) => {
      state.doc_file = action.payload;
    },
  },
});

 

export const { setFirstParam, setFirstParam1, setDocFile } =
  GeneralSlice.actions;
export default GeneralSlice.reducer;