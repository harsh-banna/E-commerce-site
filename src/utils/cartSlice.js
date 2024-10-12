import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers: {
        addItem: (state, action)=>{
            let find = state.items.findIndex((item) => item.id === action.payload.id);
            if(find >= 0){
                state.items[find].quantity += 1
            }else{
            state.items.push(action.payload)};
        },
        removeItem: (state, action)=>{
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearItem: (state,action)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearItem} = cartSlice.actions;

export default cartSlice.reducer;

// function handlesearch(){
//     console.log(search);
//     const filterdata = data.products.filter((data) => 
//     data.title.toLowerCase().includes(search.toLowerCase()));
//     console.log(filterdata,"ye");
//     setfilteredproducts(filterdata);}