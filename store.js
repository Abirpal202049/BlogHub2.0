import {configureStore} from '@reduxjs/toolkit';
import postReducer from './src/features/post/postSlice';
import userSlice from './src/features/user/userSlice';

export const store = configureStore({
    reducer : {
        posts : postReducer,
        users : userSlice
    }   
})