import React from 'react'
import { createSlice } from '@reduxjs/toolkit';


const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser:(state , action)=>{
            state = [...state , action.payload]
            return state;
        }
    }
})

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;
