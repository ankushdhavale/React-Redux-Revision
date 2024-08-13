import react from 'react';
import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state =  [...state , action.payload]
            return state;
        }
    }
})

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;