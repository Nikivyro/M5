import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getComments } from "./post/post";

export const AllCommentURL = 'https://striveschool-api.herokuapp.com/api/comments';

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const addComment = createAsyncThunk(
    'comments/addComment',
    async ({ newCommentData }) => {

        try {
            const response = await fetch(`${AllCommentURL}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
                },
                body: JSON.stringify(newCommentData),
            });

            // console.log('Request URL:', `${AllCommentURL}`);
            // console.log('Request Data:', JSON.stringify(newCommentData));
            // console.log('Response Status:', response.status);
            // console.log('Response Data:', await response.text());
            
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
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
                },
            });

            if (!response.ok) {
                throw new Error('Errore durante l\'eliminazione del commento');
            }
            return commentId;
        } catch (error) {
            console.error('Errore:', error);
            throw error;
        }
    }
);

export const updateComment = createAsyncThunk(
    'comments/updateComment',
    async ({ commentId, updatedCommentData }) => {
        try {
            const response = await fetch(`${AllCommentURL}/${commentId}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
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
                state.comments.push(action.payload);
            })
            .addCase(addComment.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Si è verificato un errore durante l\'aggiunta del commento';
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = state.comments.filter((comment) => comment._id !== action.payload);
            })
            .addCase(deleteComment.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Si è verificato un errore durante l\'eliminazione del commento';
            })
            .addCase(updateComment.fulfilled, (state, action) => {
                state.isLoading = false;
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