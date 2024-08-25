import { configureStore } from "@reduxjs/toolkit";
// import CounterReducer from "../CounterApp/counter/CounterSlice"; 
// import todosReducer from "../FetchData/reducer/todosReducer"; 
// import postsReducer from "../FetchPosts/postSlice"; 
import bookReducer from '../CurdAPP/features/Books/BooksSlice'

const store = configureStore({
    reducer: {
        // counter: CounterReducer,
        // todos: todosReducer,
        // posts: postsReducer,
        books: bookReducer,
    }
});

export default store;
