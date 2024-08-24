import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterApp/counter/CounterSlice";
const store = configureStore({
   reducer:{
    counter: CounterReducer,
    
   }
})

export default store;