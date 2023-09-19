import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const AllCommentURL = 'https://striveschool-api.herokuapp.com/api/comments';

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const getComments = createAsyncThunk (
    'comments/getAllComments',
    async (bookId) => {
        try {
            const response = await fetch(`${AllCommentURL}/${bookId}`, {
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
                }
            });
            return await response.json();
        } catch(e) {
            console.log(e);
        }
    }
)

export const addComment = createAsyncThunk(
    'comments/addComment',
    async ({ bookId, newCommentData }) => {
        try {
            const response = await fetch(`${AllCommentURL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCommentData),
            });

            if (!response.ok) {
                throw new Error('Errore durante l\'aggiunta del commento');
            }

            const data = await response.json();

            return data;
        } catch (error) {
            console.error('Errore:', error);
            throw error;
        }
    }
);

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async ({ commentId }) => {
        try {
            const response = await fetch(`${AllCommentURL}/${commentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Errore durante l\'eliminazione del commento');
            }

            // Restituisci l'ID del commento eliminato
            return commentId;
        } catch (error) {
            console.error('Errore:', error);
            throw error;
        }
    }
);

export const updateComment = createAsyncThunk(
    'comments/updateComment',
    async ({ bookId, commentId, updatedCommentData }) => {
        try {
            const response = await fetch(`${AllCommentURL}/${commentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCommentData),
            });

            if (!response.ok) {
                throw new Error('Errore durante l\'aggiornamento del commento');
            }

            const data = await response.json();

            return data;
        } catch (error) {
            console.error('Errore:', error);
            throw error;
        }
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = action.payload;
            })
            .addCase(getComments.rejected, (state) => {
                state.isLoading = false;
                state.error = "Si è verificato un errore durante la ricezione dei dati dal server";
            })
            .addCase(addComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments.push(action.payload); // Aggiungi il nuovo commento alla lista
            })
            .addCase(addComment.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Si è verificato un errore durante l\'aggiunta del commento';
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.isLoading = false;
                // Rimuovi il commento con l'ID corrispondente dalla lista dei commenti
                state.comments = state.comments.filter((comment) => comment._id !== action.payload);
            })
            .addCase(deleteComment.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Si è verificato un errore durante l\'eliminazione del commento';
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.isLoading = false;
                // Aggiorna il commento nella lista con i dati aggiornati
                state.comments = state.comments.map((comment) =>
                    comment._id === action.payload._id ? action.payload : comment
                );
            })
            .addCase(updateComment.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Si è verificato un errore durante l\'aggiornamento del commento';
            });
    }
});

export const allComments = (state) => state.commentsStore.comments;
export const isCommentsLoading = (state) => state.commentsStore.isLoading;
export const CommentsError = (state) => state.commentsStore.error;

export default commentsSlice.reducer;



{/* 
    ENDPOINT
    https://striveschool-api.herokuapp.com/api/comments/

    fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
        }
    })
                
    Il componente deve essere renderizzato nel momento in cui il selected viene visualizzato 
    Eseguo una fecth all'endpoint https://striveschool-api.herokuapp.com/api/comments/ con l'autenticazione
    GET, POST e DELETE per i commenti
    GET nei CommentiList -> Renderizza tutti i commenti all'intenro del componente SingleComment
    POST nell'AddComment -> Tramite gli input si scrivono delle recensioni e si fa il post alle API tramite onclick sul button

    extra
    fare DELETE E PUT
    fare messaggi di errore e spinner


    Il form utilizzato per i metodi dovrà essere collegato tramite fecth all 'endpoint e si può usare il rest operator per
    riempire l'oggetto del singolo commento (d4 - reservation form)
*/}