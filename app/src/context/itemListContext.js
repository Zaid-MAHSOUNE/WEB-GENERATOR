import { configureStore,createSlice } from '@reduxjs/toolkit';

const itemListSlice = createSlice({
    name:"supList",
    initialState: {value: []},
    reducers:{
        addItems:(state,action) => {
            state.value = [...state.value,action.payload]
        },
        removeItems:(state,action) => {
        }
    }
}); 

const selectedSlice = createSlice({
    name:"selected",
    initialState: {value: {selected : null}},
    reducers:{
        setSelected:(state,action) => {
            state.value = action.payload;
        },
        removeItems:(state,action) => {
        }
    }
}); 


export const {addItems} = itemListSlice.actions;
export const {setSelected} = selectedSlice.actions;


export const store = configureStore({
    reducer:{
        itemList: itemListSlice.reducer,
        selected: selectedSlice.reducer,
    }
});
