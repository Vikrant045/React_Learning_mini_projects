
//step 1  , import store from main redux
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todos/TodoSclice';
//step 2  make  a store variable by using (configure store)

export const store = configureStore({
    reducer: todoReducer
});

// step 3 , make reducers , named as SLICES in features folder