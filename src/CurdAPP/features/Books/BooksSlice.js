import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialBooks = {
    books: [
        { id: uuidv4(), title: "The Art of Coding", author: "John Doe" },
        { id: uuidv4(), title: "React Essentials", author: "Jane Smith" }
    ]
};

const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },

        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const book = state.books.find((book) => book.id === id);
            if (book) {
                book.title = title;
                book.author = author;
            }
        },

        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
    },
});

export const { showBooks, addBooks, deleteBooks, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
