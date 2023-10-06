import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("posts" ,async(args, {rejectWithValue})=>{
 const response = await fetch("https://jsonplaceholder.typicode.com/posts");

 try {
    const result = response.json();
 return result; 
 } catch (error) {
    return rejectWithValue("Opps found an error")
 }
  
})

export const posts = createSlice({
    name: "post",
    initialState: {
        users : [],
        loading: false,
        error:null,
    },

    extraReducers : {
        [getAllData.pending] : (state) =>{
            state.loading = true;
        },
        [getAllData.fulfilled] : (state,action) =>{
            state.loading = false;
            state.users = action.payload
        },
     [getAllData.rejected] : (state , action) =>{
            state.loading = false;
            state.error = action.payload;
        },
    }

})

export default  posts.reducer ;