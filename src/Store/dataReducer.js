import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  todos: [],
}

export const slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
   
    setAll: (state, action) =>{
        state.todos = action.payload;
    },
    addOne: (state, action) =>{
        state.todos.push(action.payload);
    },
    removeOne: (state, action) =>{
        state.todos = state.todos.filter((item) => item.id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAll, addOne, removeOne } = slice.actions

export default slice.reducer