import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../CounterApp/counter/CounterSlice"; // Ensure correct path
import todosReducer from "../FetchData/reducer/todosReducer"; // Ensure correct path
import postsReducer from "../FetchPosts/postSlice"; // Ensure correct path

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        todos: todosReducer,
        posts: postsReducer,
    }
});

export default store;
