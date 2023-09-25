import { createAsyncThunk } from "@reduxjs/toolkit";
import { AllCommentURL } from "../commentReducer";

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