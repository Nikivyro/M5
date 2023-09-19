import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Dichiariamo gli stati iniziali
const initialState = {
    books: [],
    selectedBookId: null, // Aggiunto per memorizzare l'ID del libro selezionato
    isLoading: false,
    error: null
}

// Chiamata per gestire le chiamate 
export const getBooks = createAsyncThunk(
    'books/getAllBooks',
    async() => {
        try {
            const response = await fetch('https://epibooks.onrender.com/')
            return await response.json()
        } catch(e) {
            console.log(e)
        }
    }
)

// Creazione dello Slice di store 
const booksSlice = createSlice({
    name: 'getBooks', // nome dello Slice
    initialState, // passaggio dello stato iniziale
    reducers: {
        setSelectedBookId: (state, action) => {
            state.selectedBookId = action.payload;
        }
    },
    extraReducers: (builder) => { // definizione dei 3 casi della Promise
        builder
            .addCase(getBooks.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload // Il payload è quello che ritorna la funzione getBooks
            })
            .addCase(getBooks.rejected, (state)=>{
                state.isLoading = false
                state.error = "Si è verificato un errore durante la ricezione dei dati dal server"
            })
    }
})

// esporto gli stati 
export const allBooks = (state) => state.booksStore.books
export const isBookLoading = (state) => state.booksStore.isLoading
export const booksError = (state) => state.booksStore.error
export const selectedBookId = (state) => state.booksStore.selectedBookId; // Esporta la funzione per ottenere l'ID del libro selezionato

export default booksSlice.reducer
