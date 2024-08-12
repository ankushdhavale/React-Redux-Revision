import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../Silces/UserSlice';

export const store = configureStore({
    reducer:{
        user:UserSlice
    }
})