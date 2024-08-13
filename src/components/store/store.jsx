import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../Silces/UserSlice';
import ProductSlice from '../Silces/ProductSlice';

export const store = configureStore({
    reducer:{
        user:UserSlice,
        product:ProductSlice
    }
})